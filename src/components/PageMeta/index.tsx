import React from 'react';
import { translate } from '@docusaurus/Translate';
import { Icon } from '../Icon';

type PageMetaProps = {
  /** Ruta de la pantalla en la plataforma (p. ej. "/studio"); varias, separadas por " · ". */
  route?: string;
  /** Permiso necesario para usarla; admite Markdown en línea. */
  children?: React.ReactNode;
};

/** Franja bajo el título con la ruta de la pantalla y el permiso que pide. */
export function PageMeta({ route, children }: PageMetaProps): React.JSX.Element {
  const routes = route ? route.split(' · ') : [];
  return (
    <div className="page-meta">
      {routes.length > 0 && (
        <div className="page-meta__item">
          <Icon name="route" size={16} className="page-meta__icon" />
          <span className="page-meta__label">{routes.length > 1
              ? translate({ id: 'cp.pageMeta.routes', message: 'Rutas' })
              : translate({ id: 'cp.pageMeta.route', message: 'Ruta' })}</span>
          {routes.map((r) => (
            <code key={r}>{r}</code>
          ))}
        </div>
      )}
      {children && (
        <div className="page-meta__item">
          <Icon name="lock" size={16} className="page-meta__icon" />
          <span className="page-meta__label">
            {translate({ id: 'cp.pageMeta.permission', message: 'Permiso' })}
          </span>
          <span>{children}</span>
        </div>
      )}
    </div>
  );
}

export default PageMeta;
