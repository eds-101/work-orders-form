import * as React from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    {children}
  </div>
);

export default Layout;
