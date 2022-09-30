import { NavLink as RemixNavLink } from '@remix-run/react';

import { NavLink } from '~/components/atoms';

const Nav = () => {
  return (
    <nav className='flex-none'>
      <ul className='menu menu-horizontal p-0 grid grid-flow-col gap-4'>
        <NavLink to='/'>Home</NavLink>
        <li tabIndex={0}>
          <RemixNavLink to='/posts'>
            Posts
            <svg
              className='fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
            </svg>
          </RemixNavLink>
          <ul className='p-2 w-full bg-base-200'>
            <NavLink to='/posts/create'>Create</NavLink>
          </ul>
        </li>
        <NavLink to='/about'>About</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
