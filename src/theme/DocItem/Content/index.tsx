import React from 'react';
import Content from '@theme-original/DocItem/Content';
import Head from '@docusaurus/Head';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData';
import type { TranslationStatusData } from '@site/plugins/translation-status';

type Props = { children: React.ReactNode };

/**
 * En otro idioma, una página que aún no está traducida se muestra en español.
 * Lo avisa al principio, marca el texto como español y pide a los buscadores que
 * no la indexen en ese idioma (ya lo hacen en su dirección en español).
 */
export default function ContentWrapper(props: Props): React.JSX.Element {
  const { pathname } = useLocation();
  const data = usePluginData('translation-status') as TranslationStatusData | undefined;
  const clean = pathname.replace(/\/+$/, '') || '/';
  const untranslated = data?.untranslated.some((p) => (p.replace(/\/+$/, '') || '/') === clean);

  if (!untranslated) return <Content {...props} />;
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="alert alert--info margin-bottom--md" role="note">
        {translate({
          id: 'cp.untranslated.notice',
          message: 'Esta página aún no está traducida y se muestra en español.',
        })}
      </div>
      <div lang="es">
        <Content {...props} />
      </div>
    </>
  );
}
