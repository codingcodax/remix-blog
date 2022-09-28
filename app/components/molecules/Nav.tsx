import { NavLink } from '~/components/atoms';

const Nav = () => {
  return (
    <nav>
      <ul className='grid grid-flow-col gap-2'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/about'>About</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
