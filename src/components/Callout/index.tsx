import React from 'react';

export type CalloutType = 'info' | 'success' | 'warning' | 'danger';

type CalloutProps = {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
};

const STYLES: Record<CalloutType, { border: string; bg: string; text: string; icon: string }> = {
  info: {
    border: 'border-l-[#3B82F6]',
    bg: 'bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.1)]',
    text: 'text-[#1D4ED8] dark:text-[#60A5FA]',
    icon: 'ℹ️',
  },
  success: {
    border: 'border-l-[#10B981]',
    bg: 'bg-[#ECFDF5] dark:bg-[rgba(16,185,129,0.1)]',
    text: 'text-[#047857] dark:text-[#34D399]',
    icon: '✅',
  },
  warning: {
    border: 'border-l-[#F59E0B]',
    bg: 'bg-[#FEF3C7] dark:bg-[rgba(245,158,11,0.1)]',
    text: 'text-[#B45309] dark:text-[#FBBF24]',
    icon: '⚠️',
  },
  danger: {
    border: 'border-l-[#EF4444]',
    bg: 'bg-[#FEF2F2] dark:bg-[rgba(239,68,68,0.1)]',
    text: 'text-[#B91C1C] dark:text-[#F87171]',
    icon: '🛑',
  },
};

/**
 * Llamada de atención (admonition) con borde lateral grueso y fondo sutil,
 * según el sistema de diseño de ConsulPoint Docs.
 */
export function Callout({ type = 'info', title, children }: CalloutProps): React.JSX.Element {
  const styles = STYLES[type];
  return (
    <div className={`my-4 rounded-md border-l-4 ${styles.border} ${styles.bg} px-4 py-3`}>
      {title && (
        <p className={`mb-1 flex items-center gap-2 font-sans text-sm font-semibold ${styles.text}`}>
          <span aria-hidden="true">{styles.icon}</span>
          {title}
        </p>
      )}
      <div className="font-sans text-sm text-[var(--cp-text-secondary)] [&>p]:m-0">{children}</div>
    </div>
  );
}

export default Callout;
