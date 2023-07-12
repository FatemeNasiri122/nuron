import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

function Layout() {

  return (
    <div className='dark:bg-background-dark bg-[#ECEFF1]' >
          <Navbar/>
          <div className='max-w-[1420px] m-auto px-4 md:px-9 xl:px-0'>
            <React.Suspense fallback={null}>
              <Outlet/>
            </React.Suspense>
          </div>
          <Footer />
    </div>
  )
}

export default Layout