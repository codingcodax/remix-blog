import type { FC, ReactNode } from 'react';
import { NavLink } from '@remix-run/react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLinkItem: FC<NavLinkProps> = ({ href, children }) => {
  const activeClassname = 'btn btn-active btn-primary';

  return (
    <li>
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
