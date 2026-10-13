import React from 'react';
import { LogoIcon } from '../Logo';

type PageHeroProps = {
  /** Texto corto sobre el resumen (p. ej. la sección de la documentación). */
  eyebrow?: string;
  /** Etiquetas destacadas bajo el resumen. */
  highlights?: string[];
  children: React.ReactNode;
};

/** Cabecera destacada con el isotipo de ConsulPoint, un resumen y etiquetas clave. */
export function PageHero({ eyebrow, highlights, children }: PageHeroProps): React.JSX.Element {
  return (
    <div className="my-6 rounded-2xl bg-ai-glow p-px">
      <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-[var(--cp-surface)] p-6 sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ai-glow opacity-[0.12] blur-3xl"
        />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <LogoIcon height={48} className="h-12 w-auto shrink-0 self-start" />
          <div className="min-w-0">
            {eyebrow && (
              <div className="mb-1 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--cp-text-accent)]">
                {eyebrow}
              </div>
            )}
            <div className="font-sans text-lg leading-relaxed text-[var(--cp-text-main)] [&>p]:m-0">{children}</div>
            {highlights && highlights.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-solid border-[var(--cp-border)] bg-[var(--cp-bg)] px-3 py-1 font-sans text-xs font-medium text-[var(--cp-text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHero;
