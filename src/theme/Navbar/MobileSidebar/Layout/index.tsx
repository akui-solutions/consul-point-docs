import React from 'react';
import Layout from '@theme-original/Navbar/MobileSidebar/Layout';
import type LayoutType from '@theme/Navbar/MobileSidebar/Layout';
import type { WrapperProps } from '@docusaurus/types';
import { TabSwitcher } from '@site/src/components/TabSwitcher';

type Props = WrapperProps<typeof LayoutType>;

/** Menú lateral del móvil con las pestañas siempre visibles bajo la cabecera. */
export default function LayoutWrapper(props: Props): React.JSX.Element {
  return (
    <Layout
      {...props}
      header={
        <>
          {props.header}
          <TabSwitcher />
        </>
      }
    />
  );
}
