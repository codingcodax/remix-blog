import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import styles from '~/styles/app.css';
import { Layout } from '~/components/templates';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const App = () => {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default App;
