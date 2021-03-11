import { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
  href: string;
};

const App = ({ children, href }: Props): JSX.Element => {
  return (
    <Link href={href}>
      <a className="py-4 hover:bg-gray-middle hover:border hover:border-custom-red">
        {children}
      </a>
    </Link>
  );
};

export default App;
