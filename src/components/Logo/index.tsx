import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

type LogoProps = {
  className?: string;
  /** Alto en píxeles; el ancho se escala proporcionalmente. */
  height?: number;
};

/**
 * Logotipo de ConsulPoint (icono + wordmark), el mismo SVG y colores que usa la
 * plataforma. Alterna entre la versión del tema claro y la del oscuro según [data-theme].
 */
export function Logo({ className, height = 32 }: LogoProps): React.JSX.Element {
  const navy = useBaseUrl('/img/logo-wordmark.svg');
  const light = useBaseUrl('/img/logo-wordmark-dark.svg');
  return (
    <>
      <img src={navy} alt="ConsulPoint" height={height} className={`${className ?? ''} dark:hidden`} />
      <img src={light} alt="ConsulPoint" height={height} className={`${className ?? ''} hidden dark:inline`} />
    </>
  );
}

/** Solo el isotipo (sin wordmark), útil para favicons, avatares o espacios reducidos. */
export function LogoIcon({ className, height = 32 }: LogoProps): React.JSX.Element {
  const navy = useBaseUrl('/img/logo-icon.svg');
  const light = useBaseUrl('/img/logo-icon-dark.svg');
  return (
    <>
      <img src={navy} alt="ConsulPoint" height={height} className={`${className ?? ''} dark:hidden`} />
      <img src={light} alt="ConsulPoint" height={height} className={`${className ?? ''} hidden dark:inline`} />
    </>
  );
}

export default Logo;
