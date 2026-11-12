import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import { Callout } from '@site/src/components/Callout';
import { EndpointCard } from '@site/src/components/EndpointCard';
import { MethodBadge } from '@site/src/components/MethodBadge';
import { PageHeader } from '@site/src/components/PageHeader';
import { Logo, LogoIcon } from '@site/src/components/Logo';
import { MenuIllustration } from '@site/src/components/MenuIllustration';
import { ModuleCard, ModuleGrid } from '@site/src/components/ModuleCard';
import { PageHero } from '@site/src/components/PageHero';
import { Screenshot } from '@site/src/components/Screenshot';
import { TabHint, useOtherTab } from '@site/src/components/TabHint';

const OriginalLink = MDXComponents.a;

/** Enlace del texto: si lleva a otra pestaña, lo indica con una etiqueta. */
function LinkWithTabHint(props: React.ComponentProps<typeof OriginalLink>): React.JSX.Element {
  const otherTab = useOtherTab(props.href);
  if (!otherTab) return <OriginalLink {...props} />;
  return (
    <>
      <OriginalLink {...props} />
      <TabHint label={otherTab} />
    </>
  );
}

export default {
  ...MDXComponents,
  a: LinkWithTabHint,
  Callout,
  EndpointCard,
  MethodBadge,
  PageHeader,
  Logo,
  LogoIcon,
  MenuIllustration,
  ModuleCard,
  ModuleGrid,
  PageHero,
  Screenshot,
  TabHint,
};
