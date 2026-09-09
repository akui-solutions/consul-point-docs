import React from 'react';
import { MethodBadge, type HttpMethod } from '../MethodBadge';

type EndpointCardProps = {
  method: HttpMethod;
  path: string;
  summary?: string;
  children?: React.ReactNode;
};

/** Tarjeta de endpoint de API REST: método, ruta y descripción, con contenido opcional (params, ejemplos...). */
export function EndpointCard({ method, path, summary, children }: EndpointCardProps): React.JSX.Element {
  return (
    <div className="my-4 overflow-hidden rounded-lg border border-[var(--cp-border)] bg-[var(--cp-card)]">
      <div className="flex items-center gap-3 border-b border-[var(--cp-border)] px-4 py-3">
        <MethodBadge method={method} />
        <code className="font-mono text-sm text-[var(--cp-text-main)]">{path}</code>
      </div>
      {summary && (
        <p className="m-0 px-4 pt-3 font-sans text-sm text-[var(--cp-text-secondary)]">{summary}</p>
      )}
      {children && <div className="px-4 pb-4 pt-3">{children}</div>}
    </div>
  );
}

export default EndpointCard;
