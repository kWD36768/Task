import React from 'react'
import Header from '../commoncomponents/Header'
import Sidenav from '../commoncomponents/Sidenav'
import { Outlet } from 'react-router-dom'
import Footer from '../commoncomponents/Footer'

const Layout = () => {
  return (
    <>
    <div className='h-screen bg-[url("https://assets-global.website-files.com/633295ff942b4d0475a32e28/64f738a1870cd5b68790c8c2_investors.png")] bg-cover bg-no-repeat'>
        <div className='sticky top-0 left-0 z-50'>
            <Header/>
        </div>
        <div className='flex justify-between'>
            <div className='fixed left-0'>
                <Sidenav/>
            </div>
            <div className='ml-[300px]'>
              <div>
                <Outlet/>
              </div>
              <div>
                 <Footer/>
              </div>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default Layout