import React from 'react';

type PageHeaderProps = {
  title: string;
  lastUpdated?: string;
  children?: React.ReactNode;
};

/** Título H1 de artículo con insignia de última actualización y resumen ejecutivo. */
export function PageHeader({ title, lastUpdated, children }: PageHeaderProps): React.JSX.Element {
  return (
    <header className="mb-6">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="m-0 font-sans text-[2.25rem] font-bold leading-[2.5rem] tracking-[-0.025em] text-[var(--cp-text-main)]">
          {title}
        </h1>
        {lastUpdated && (
          <span className="inline-flex items-center rounded-full border border-[var(--cp-cyan)]/40 bg-[rgba(0,210,255,0.1)] px-2.5 py-0.5 font-mono text-xs font-semibold text-[var(--cp-text-accent)]">
            Actualizado · {lastUpdated}
          </span>
        )}
      </div>
      {children && (
        <p className="mt-3 font-sans text-base leading-[1.625rem] text-[var(--cp-text-secondary)]">{children}</p>
      )}
    </header>
  );
}

export default PageHeader;
