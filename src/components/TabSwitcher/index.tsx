import React from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useGlobalData from '@docusaurus/useGlobalData';
import { sidebarOf, type DocsGlobalData, type NavbarItem } from '../TabHint';

/**
 * Las pestañas de la barra superior (Guía de uso, Desarrolladores, Administración)
 * como selector segmentado, para el menú lateral del móvil: así se cambia de
 * pestaña sin pasar por «Volver al menú principal».
 */
export function TabSwitcher(): React.JSX.Element | null {
  const { pathname } = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const docsData = (useGlobalData()['docusaurus-plugin-content-docs'] ?? {}) as DocsGlobalData;

  const items = ((siteConfig.themeConfig.navbar as { items?: NavbarItem[] })?.items ?? []).filter(
    (item) => item.type === 'docSidebar' && item.sidebarId,
  );
  const sidebars = Object.values(docsData)[0]?.versions[0]?.sidebars ?? {};
  const current = sidebarOf(pathname, docsData);

  if (items.length === 0) return null;

  // El panel se cierra como al pulsar fuera de él.
  const close = () =>
    document.querySelector<HTMLElement>('.navbar-sidebar__backdrop')?.click();

  return (
    <nav className="tab-switcher" aria-label="Secciones de la documentación">
      {items.map((item) => {
        const to = sidebars[item.sidebarId!]?.link?.path ?? '/';
        const active = item.sidebarId === current;
        return (
          <Link
            key={item.sidebarId}
            to={to}
            onClick={close}
            aria-current={active ? 'page' : undefined}
            className={`tab-switcher__item${active ? ' tab-switcher__item--active' : ''}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default TabSwitcher;
