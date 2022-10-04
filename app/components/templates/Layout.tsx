import { Outlet } from '@remix-run/react';

import { Header } from '~/components/organisms';
import { Footer } from '~/components/atoms';

const Layout = () => {
  return (
    <div className='h-full grid grid-rows-[auto_1fr_auto] gap-y-8'>
      <Header />
      <div className='container mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
