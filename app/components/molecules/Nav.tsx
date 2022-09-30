import { NavLink } from '~/components/atoms';

const Nav = () => {
  return (
    <nav className='flex-none'>
      <ul className='menu menu-horizontal p-0 grid grid-flow-col gap-4'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/about'>About</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
