import React from 'react';
import type { Props } from '@theme/Footer/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Pie de página: a la izquierda la marca (logo y lema del sitio), alineada con el
 * logo de la barra superior; a la derecha las columnas de enlaces, que empiezan
 * en la misma línea que el contenido. Debajo, el copyright.
 */
export default function FooterLayout({ links, logo, copyright }: Props): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <footer className="footer cp-footer">
      <div className="cp-footer__inner">
        <div className="cp-footer__brand">
          {logo}
          <p className="cp-footer__tagline">{siteConfig.tagline}</p>
        </div>
        <div className="cp-footer__links">{links}</div>
      </div>
      {copyright && <div className="cp-footer__bottom">{copyright}</div>}
    </footer>
  );
}
