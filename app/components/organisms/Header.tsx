import { Link } from '@remix-run/react';

import { Nav } from '~/components//molecules';

const Header = () => {
  return (
    <header className='navbar bg-base-200 rounded-lg mx-auto container lg'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          codingcodax
        </Link>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
