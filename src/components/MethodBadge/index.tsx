import React from 'react';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const METHOD_STYLES: Record<HttpMethod, string> = {
  GET: 'bg-[rgba(59,130,246,0.12)] text-[#3B82F6] ring-[#3B82F6]/40',
  POST: 'bg-[rgba(16,185,129,0.12)] text-[#10B981] ring-[#10B981]/40',
  PUT: 'bg-[rgba(245,158,11,0.12)] text-[#F59E0B] ring-[#F59E0B]/40',
  PATCH: 'bg-[rgba(139,92,246,0.12)] text-[#8B5CF6] ring-[#8B5CF6]/40',
  DELETE: 'bg-[rgba(239,68,68,0.12)] text-[#EF4444] ring-[#EF4444]/40',
};

/** Insignia de método HTTP para endpoints de API, con color por verbo. */
export function MethodBadge({ method }: { method: HttpMethod }): React.JSX.Element {
  return (
    <span
      className={`inline-flex items-center justify-center rounded font-mono text-xs font-semibold tracking-wide px-2 py-0.5 ring-1 ring-inset ${METHOD_STYLES[method]}`}
    >
      {method}
    </span>
  );
}

export default MethodBadge;
