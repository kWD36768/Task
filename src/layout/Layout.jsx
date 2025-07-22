import React from 'react'
import Header from '../commoncomponents/Header'
import Sidenav from '../commoncomponents/Sidenav'
import { Outlet } from 'react-router-dom'
import Footer from '../commoncomponents/Footer'

const Layout = () => {
  return (
    <>
      {/* Full screen fixed background */}
      <div className='min-h-screen bg-[url("https://assets-global.website-files.com/633295ff942b4d0475a32e28/64f738a1870cd5b68790c8c2_investors.png")] bg-fixed bg-cover bg-no-repeat bg-center text-white'>
        
        {/* Sticky header */}
        <div className='sticky top-0 left-0 z-50'>
          <Header />
        </div>

        {/* Side nav and main content */}
        <div className='flex'>
          
          {/* Sidebar */}
          <div className='w-[280px] fixed left-0 top-0 mt-[80px]'> 
            {/* Adjust mt-[80px] according to header height */}
            <Sidenav />
          </div>

          {/* Main content area */}
          <div className='ml-[280px] w-full px-4 pt-4'>
            <Outlet />

            <div className='mt-8'>
              <Footer />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Layout