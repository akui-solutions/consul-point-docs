#!/usr/bin/env node
/**
 * Estado de las traducciones: qué páginas traducidas se han quedado atrás de su
 * original en español.
 *
 * Cada idioma tiene un archivo i18n/<idioma>/translation-status.json que guarda,
 * por página, una huella del original en español en el momento de traducirla.
 * Si el original cambia, la huella ya no coincide y la página se marca como
 * desactualizada.
 *
 * Uso:
 *   node scripts/translation-status.mjs            Lista las páginas desactualizadas.
 *   node scripts/translation-status.mjs --update intro.md introduccion/tu-cuenta.md
 *                                                  Marca esas páginas como al día
 *                                                  (después de traducirlas o revisarlas).
 *
 * El build muestra el mismo aviso, y en GitHub aparece como anotación en la PR.
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const DEFAULT_LOCALE = 'es';

const translatedDir = (locale) =>
  path.join(ROOT, 'i18n', locale, 'docusaurus-plugin-content-docs', 'current');
const statusFile = (locale) => path.join(ROOT, 'i18n', locale, 'translation-status.json');

function hash(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 16);
}

function listDocs(dir, base = dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return listDocs(full, base);
    return /\.mdx?$/.test(entry.name) ? [path.relative(base, full).split(path.sep).join('/')] : [];
  });
}

export function locales() {
  const dir = path.join(ROOT, 'i18n');
  return fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((l) => l !== DEFAULT_LOCALE && fs.existsSync(translatedDir(l)))
    : [];
}

function readStatus(locale) {
  try {
    return JSON.parse(fs.readFileSync(statusFile(locale), 'utf8'));
  } catch {
    return {};
  }
}

/** Páginas traducidas cuyo original cambió, o que nunca se marcaron como al día. */
export function staleTranslations(locale) {
  const status = readStatus(locale);
  const problems = [];
  for (const page of listDocs(translatedDir(locale))) {
    const source = path.join(DOCS, page);
    if (!fs.existsSync(source)) {
      problems.push({ page, reason: 'el original en español ya no existe' });
    } else if (!status[page]) {
      problems.push({ page, reason: 'no está marcada como al día (falta --update)' });
    } else if (status[page] !== hash(source)) {
      problems.push({ page, reason: 'el original en español cambió después de traducirla' });
    }
  }
  return problems;
}

/** Imprime los avisos de todos los idiomas. Devuelve cuántos hay. */
export function report(log = console.warn) {
  let count = 0;
  for (const locale of locales()) {
    for (const { page, reason } of staleTranslations(locale)) {
      count += 1;
      const file = `i18n/${locale}/docusaurus-plugin-content-docs/current/${page}`;
      if (process.env.GITHUB_ACTIONS) {
        console.log(`::warning file=${file},title=Traducción desactualizada::${reason}`);
      } else {
        log(`[traducciones] ${file}: ${reason}`);
      }
    }
  }
  return count;
}

function update(locale, pages) {
  const status = readStatus(locale);
  for (const page of pages) {
    const source = path.join(DOCS, page);
    if (!fs.existsSync(source)) throw new Error(`No existe docs/${page}`);
    if (!fs.existsSync(path.join(translatedDir(locale), page))) {
      throw new Error(`No existe la traducción de ${page} en i18n/${locale}`);
    }
    status[page] = hash(source);
  }
  const sorted = Object.fromEntries(Object.entries(status).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(statusFile(locale), `${JSON.stringify(sorted, null, 2)}\n`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const localeArg = args.find((a) => a.startsWith('--locale='));
  const locale = localeArg ? localeArg.split('=')[1] : 'en';
  if (args.includes('--update')) {
    const pages = args.filter((a) => !a.startsWith('--')).map((p) => p.replace(/^docs\//, ''));
    update(locale, pages);
    console.log(`Marcadas como al día en ${locale}: ${pages.join(', ')}`);
  } else {
    const count = report(console.log);
    if (count === 0) console.log('Todas las traducciones están al día.');
  }
}
