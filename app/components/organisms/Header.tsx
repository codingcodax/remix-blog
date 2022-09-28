import { Link } from '@remix-run/react';

import { Nav } from '~/components//molecules';

const Header = () => {
  return (
    <header className='flex justify-between'>
      <Link to='/'>codingcodax</Link>

      <Nav />
    </header>
  );
};

export default Header;
