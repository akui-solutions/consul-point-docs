import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Icon, type IconName } from '../Icon';

type ModuleCardProps = {
  icon: IconName;
  /** Nombre del elemento tal como aparece en el menú. */
  title: string;
  /** Nombre interno del módulo (p. ej. "Knowledge Hub"). */
  module?: string;
  /** Ruta de la página de documentación del módulo; sin ella la tarjeta no es enlazable. */
  href?: string;
  /** Captura opcional del módulo, ruta dentro de static/ (p. ej. "/img/navegacion/chat.png"). */
  image?: string;
  children: React.ReactNode;
};

/** Tarjeta de un módulo de la plataforma: icono, nombre, función y enlace a su documentación. */
export function ModuleCard({ icon, title, module, href, image, children }: ModuleCardProps): React.JSX.Element {
  const imageUrl = useBaseUrl(image ?? '');

  const body = (
    <>
      {image && (
        <div className="aspect-[2/1] overflow-hidden border-0 border-b border-solid border-[var(--cp-border)] bg-[var(--cp-bg)]">
          <img
            src={imageUrl}
            alt={`Vista del módulo ${title}`}
            loading="lazy"
            className="block h-full w-full object-cover object-left-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(59,130,246,0.1)] text-[#3B82F6] dark:bg-[rgba(0,210,255,0.1)] dark:text-[#00D2FF]">
            <Icon name={icon} size={20} />
          </span>
          <div className="min-w-0">
            <div className="font-sans text-base font-semibold leading-snug text-[var(--cp-text-main)]">{title}</div>
            {module && (
              <div className="mt-0.5 font-mono text-[0.7rem] uppercase tracking-wider text-[var(--cp-text-muted)]">
                {module}
              </div>
            )}
          </div>
        </div>
        <div className="font-sans text-sm leading-relaxed text-[var(--cp-text-secondary)] [&>p]:m-0">{children}</div>
        {href && (
          <span className="mt-auto inline-flex items-center gap-1 font-sans text-sm font-semibold text-[var(--cp-text-accent)]">
            Ver documentación
            <Icon name="arrowRight" size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </>
  );

  const cardClass =
    'group flex h-full flex-col overflow-hidden rounded-xl border border-solid border-[var(--cp-border)] bg-[var(--cp-card)] transition-all duration-200';

  if (!href) {
    return <div className={cardClass}>{body}</div>;
  }
  return (
    <Link
      to={href}
      className={`${cardClass} text-inherit no-underline hover:-translate-y-0.5 hover:border-[var(--cp-cyan)] hover:text-inherit hover:no-underline hover:shadow-[0_8px_24px_rgba(0,210,255,0.12)]`}
    >
      {body}
    </Link>
  );
}

/** Rejilla adaptable para agrupar varias ModuleCard. */
export function ModuleGrid({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>;
}

export default ModuleCard;
