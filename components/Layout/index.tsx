import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

import Link from 'next/link';
import NavLink from './NavLink';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'This is the default title',
}: Props): JSX.Element => (
  <div className="w-screen h-max flex bg-gray-middle text-gray-300">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <aside
      className="w-40 h-screen flex flex-col justify-between align-center
      p-4 border-r-2 border-gray-darkest bg-gray-darker sticky top-0"
    >
      <Link href="/">
        <a>
          <Image src="/logo.svg" alt="Logo" width={135} height={50} />
        </a>
      </Link>
      <nav
        className="flex flex-col flex-grow justify-center text-center
        divide-y-2 divide-custom-red"
      >
        <NavLink href="/about">about</NavLink>
        <NavLink href="/portfolio">portfolio</NavLink>
        <NavLink href="/skills">skills</NavLink>
      </nav>
      <div className="flex justify-between align-center">
        <a
          href="https://www.linkedin.com/in/vinicius-bernardes-santos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            size="1.3rem"
            className="fill-current text-white hover:text-custom-red"
          />
        </a>
        <a
          href="https://github.com/viniciusbe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size="1.3rem"
            className="fill-current text-white hover:text-custom-red"
          />
        </a>
        <a
          href="https://twitter.com/Viniciusbern7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            size="1.3rem"
            className="fill-current text-white hover:text-custom-red"
          />
        </a>
      </div>
    </aside>
    <main className="m-auto">{children}</main>
  </div>
);

export default Layout;
