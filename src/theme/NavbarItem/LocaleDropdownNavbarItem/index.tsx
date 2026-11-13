import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import { GlobeIcon } from '@phosphor-icons/react';

/**
 * Cambio de idioma como en la web de ConsulPoint: un enlace con el globo y el
 * código del idioma actual (ES en español, EN en inglés) que lleva a la misma
 * página en el otro idioma; su etiqueta accesible dice adónde lleva. Sustituye al
 * desplegable de Docusaurus.
 *
 * Es un enlace normal (recarga la página) porque cada idioma es un sitio aparte.
 * Con `pnpm start` solo existe un idioma: el enlace al otro da 404 en local.
 */
const READ_IN: Record<string, string> = {
  es: 'Leer en español',
  en: 'Read in English',
};

type Props = { mobile?: boolean };

export default function LocaleSwitchNavbarItem({ mobile }: Props): React.JSX.Element | null {
  const { i18n } = useDocusaurusContext();
  const { pathname, search, hash } = useLocation();
  const { currentLocale, defaultLocale, locales, localeConfigs } = i18n;
  // La parte ?…#… se añade al cargar en el navegador: el HTML generado no la
  // conoce y React no corrige un atributo distinto al hidratar.
  const [suffix, setSuffix] = useState('');
  useEffect(() => setSuffix(`${search}${hash}`), [search, hash]);

  const target = locales.find((l) => l !== currentLocale);
  if (!target) return null;

  const prefix = (locale: string) => (locale === defaultLocale ? '' : `/${locale}`);
  const rest =
    currentLocale === defaultLocale
      ? pathname
      : pathname.replace(new RegExp(`^/${currentLocale}(?=/|$)`), '') || '/';
  const href = `${prefix(target)}${rest}${suffix}`;
  const label = READ_IN[target] ?? localeConfigs[target]?.label ?? target;
  const common = { href, hrefLang: target, 'aria-label': label, title: label };

  if (mobile) {
    return (
      <li className="menu__list-item">
        <a className="menu__link cp-lang-link--mobile" {...common}>
          <GlobeIcon size={18} weight="light" aria-hidden="true" />
          {localeConfigs[currentLocale]?.label ?? currentLocale}
        </a>
      </li>
    );
  }
  return (
    <a className="navbar__item cp-lang-link" {...common}>
      <GlobeIcon size={16} weight="light" aria-hidden="true" />
      {currentLocale.toUpperCase()}
    </a>
  );
}
