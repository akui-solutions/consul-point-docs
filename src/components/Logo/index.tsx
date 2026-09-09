import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

type LogoProps = {
  className?: string;
  /** Alto en píxeles; el ancho se escala proporcionalmente. */
  height?: number;
};

/**
 * Logotipo oficial de ConsulPoint (icono + wordmark). Alterna automáticamente
 * entre la versión navy (tema claro) y blanca (tema oscuro) según [data-theme].
 */
export function Logo({ className, height = 32 }: LogoProps): React.JSX.Element {
  const navy = useBaseUrl('/img/logo-wordmark-navy.png');
  const light = useBaseUrl('/img/logo-wordmark-light.png');
  return (
    <>
      <img src={navy} alt="ConsulPoint" height={height} className={`${className ?? ''} dark:hidden`} />
      <img src={light} alt="ConsulPoint" height={height} className={`${className ?? ''} hidden dark:inline`} />
    </>
  );
}

/** Solo el isotipo (sin wordmark), útil para favicons, avatares o espacios reducidos. */
export function LogoIcon({ className, height = 32 }: LogoProps): React.JSX.Element {
  const navy = useBaseUrl('/img/logo-icon-navy.png');
  const light = useBaseUrl('/img/logo-icon-light.png');
  return (
    <>
      <img src={navy} alt="ConsulPoint" height={height} className={`${className ?? ''} dark:hidden`} />
      <img src={light} alt="ConsulPoint" height={height} className={`${className ?? ''} hidden dark:inline`} />
    </>
  );
}

export default Logo;
