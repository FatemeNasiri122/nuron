import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';

function Layout() {

  return (
        <div className='bg-background-dark'>
            <Navbar/>
            <React.Suspense fallback={null}>
                <Outlet/>
            </React.Suspense>
        </div>
  )
}

export default Layout