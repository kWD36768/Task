import React, { useState } from 'react'
import logo1 from './../assets/logo.png'
import { IoIosContact } from "react-icons/io";
import { AiOutlineProfile } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Header = () => {
  const [logo , setlogo] = useState(false)
  return (
   <>
   <div className='Header'>
    <div className='headerinner   rounded-sm  w-[1180px] p-5 flex justify-between items-center bg-[#16041575] m-auto'>
      <div className='logo rounded-sm w-[100px]'>
        <img src={logo1} alt='img' className='rounded-sm' />
      </div>
      <div className='relative '>
         <div className='text-white' onClick={()=> setlogo(!logo)}>
        <IoIosContact size={35} />
      </div>
       <div className={`absolute right-[10px] transition-all duration-600 bg-white p-2 ease-in-out w-[200px]  border
         ${ logo ?   " block" : "hidden"}`}>
        {logo ?  <div className=' '>
          <Link  className=' flex justify-between  items-center' ><p><AiOutlineProfile /></p> <p>Profile</p></Link>
          <Link className=' flex justify-between  items-center ' ><p><CiLogout /></p> <p>Log out</p></Link>
          </div>  : ""}
      </div>
      </div>
     

    </div>
    
     
     
   </div>
   </>
  )
}

export default Header 