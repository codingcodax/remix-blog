import type { FC, ReactNode } from 'react';
import { Link } from '@remix-run/react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <li className='duration-300 hover:text-indigo-700'>
      <Link to={href}>{children}</Link>
    </li>
  );
};

export default NavLink;
