import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'This is the default title',
}: Props): JSX.Element => (
  <div className="w-screen h-screen grid grid-cols-2 bg-gray-700 text-white">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <aside
      className="w-32 h-screen flex flex-col justify-between align-center
      p-4 border-r-2 border-red-800 bg-gray-800"
    >
      <Image src="/logo.svg" alt="Logo" width={135} height={50} />
      <nav className="flex flex-col flex-grow justify-center text-center">
        <Link href="/">
          <a className="py-4 border-b border-red-800">about</a>
        </Link>
        <Link href="/about">
          <a className="py-4 border-b border-red-800">portfolio</a>
        </Link>
        <Link href="/about">
          <a className="py-4 border-b border-red-800">skills</a>
        </Link>
        <Link href="/users">
          <a className="py-4 ">contact</a>
        </Link>
      </nav>
      <div>
        <Image src="/in.svg" alt="Logo" width={30} height={30} />
        <Image src="/github-icon.svg" alt="Logo" width={30} height={30} />
        <Image src="/twitter.svg" alt="Logo" width={30} height={30} />
      </div>
    </aside>
    <main>{children}</main>
  </div>
);

export default Layout;
