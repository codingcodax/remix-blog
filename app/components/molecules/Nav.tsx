import { NavLink as RemixNavLink } from '@remix-run/react';

import { NavLink } from '~/components/atoms';

const Nav = () => {
  return (
    <nav className='flex-none'>
      <ul className='hidden menu menu-horizontal p-0 sm:grid grid-flow-col gap-4'>
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

      <div className='dropdown sm:hidden navbar-start'>
        <label tabIndex={0} className='btn btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h7'
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
        >
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/posts'>Posts</NavLink>
          <NavLink to='/posts/create'>Create Post</NavLink>
          <NavLink to='/about'>About</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
