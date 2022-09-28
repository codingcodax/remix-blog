import type { FC, ReactNode } from 'react';
import { NavLink } from '@remix-run/react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLinkItem: FC<NavLinkProps> = ({ href, children }) => {
  const activeClassname = 'text-indigo-700';

  return (
    <li className='duration-300 hover:text-indigo-700'>
      <NavLink
        to={href}
        className={({ isActive }) => (isActive ? activeClassname : '')}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavLinkItem;
