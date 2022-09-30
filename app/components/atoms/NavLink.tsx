import type { FC, ReactNode } from 'react';
import { NavLink as RemixNavLink } from '@remix-run/react';

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <li>
      <RemixNavLink to={to}>{children}</RemixNavLink>
    </li>
  );
};

export default NavLink;
