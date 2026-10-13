import React from 'react';
import { Logo } from '../Logo';
import { Icon, type IconName } from '../Icon';

type MenuItem = { icon: IconName; label: string };

type MenuIllustrationProps = {
  /** Elementos del bloque superior del menú. */
  main: MenuItem[];
  /** Título de sección mostrado bajo el bloque superior (p. ej. "Fijados"). */
  section?: string;
  /** Elementos del bloque inferior, separados por una línea. */
  footer?: MenuItem[];
  /** Si se indica, dibuja la barra superior con el selector de espacio de trabajo y este nombre. */
  workspace?: string;
  /** Etiqueta del elemento resaltado como activo. */
  active?: string;
  caption?: string;
};

function Item({ icon, label, active }: MenuItem & { active: boolean }): React.JSX.Element {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-md px-2.5 py-1.5 font-sans text-[0.8rem] ${
        active
          ? 'bg-[rgba(59,130,246,0.1)] font-semibold text-[#3B82F6] dark:bg-[rgba(0,210,255,0.1)] dark:text-[#00D2FF]'
          : 'text-[var(--cp-text-secondary)]'
      }`}
    >
      <Icon name={icon} size={16} className="shrink-0" />
      <span className="truncate">{label}</span>
    </div>
  );
}

/** Bloque gris de relleno que sugiere contenido sin representarlo. */
function Skeleton({ className }: { className: string }): React.JSX.Element {
  return <div className={`rounded-lg bg-[var(--cp-border)] opacity-60 ${className}`} />;
}

/**
 * Ilustración minimalista de la interfaz de ConsulPoint: el menú lateral con sus
 * módulos y un área de contenido esquemática. Se adapta al tema claro y oscuro.
 */
export function MenuIllustration({ main, section, footer, workspace, active, caption }: MenuIllustrationProps): React.JSX.Element {
  return (
    <figure className="mx-0 my-8">
      <div
        role="img"
        aria-label={`Esquema del menú lateral de ConsulPoint: ${[...main, ...(footer ?? [])].map((i) => i.label).join(', ')}`}
        className="overflow-hidden rounded-xl border border-solid border-[var(--cp-border)] bg-[var(--cp-card)] shadow-[0_8px_30px_rgba(15,44,89,0.08)]"
      >
        <div className="flex items-center gap-1.5 border-0 border-b border-solid border-[var(--cp-border)] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex">
          <div className="flex w-full flex-col border-0 border-solid border-[var(--cp-border)] p-3 sm:w-60 sm:shrink-0 sm:border-r dark:border-[rgba(255,255,255,0.08)]">
            <div className="mb-3 px-2.5 pt-1">
              <Logo height={24} className="h-6 w-auto" />
            </div>
            <div className="flex flex-col gap-0.5">
              {main.map((item) => (
                <React.Fragment key={item.label}>
                  <Item icon={item.icon} label={item.label} active={item.label === active} />
                </React.Fragment>
              ))}
            </div>
            {section && (
              <div className="mt-3 px-2.5 font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-[var(--cp-text-muted)]">
                {section}
              </div>
            )}
            {footer && footer.length > 0 && (
              <div className="mt-6 flex flex-col gap-0.5 border-0 border-t border-solid border-[var(--cp-border)] pt-3 dark:border-[rgba(255,255,255,0.08)]">
                {footer.map((item) => (
                  <React.Fragment key={item.label}>
                    <Item icon={item.icon} label={item.label} active={item.label === active} />
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
          <div aria-hidden="true" className="hidden flex-1 flex-col gap-3 bg-[var(--cp-bg)] p-5 sm:flex">
            {workspace && (
              <div className="-mx-5 -mt-5 mb-2 flex items-center justify-end gap-3 border-0 border-b border-solid border-[var(--cp-border)] px-5 py-2.5 text-[var(--cp-text-secondary)] dark:border-[rgba(255,255,255,0.08)]">
                <span className="inline-flex items-center gap-1.5 font-sans text-[0.75rem] font-medium">
                  <Icon name="workspaces" size={14} />
                  {workspace}
                  <Icon name="caretDown" size={12} />
                </span>
                <Icon name="inbox" size={18} />
                <Icon name="notifications" size={18} />
                <span className="h-6 w-6 rounded-full bg-ai-glow opacity-70" />
              </div>
            )}
            <Skeleton className="h-4 w-40" />
            <div className="grid grid-cols-5 gap-3">
              <Skeleton className="col-span-2 h-32" />
              <Skeleton className="col-span-3 h-32" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
            </div>
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center font-sans text-sm text-[var(--cp-text-muted)]">{caption}</figcaption>
      )}
    </figure>
  );
}

export default MenuIllustration;
