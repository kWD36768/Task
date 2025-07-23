import React, { useEffect, useState } from 'react'

import { IoIosContact } from "react-icons/io";
import { AiOutlineProfile } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const [logo , setlogo] = useState(false)
  
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedinUser");
    if (!storedUser) {
      navigate("/"); // Redirect if not logged in
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem("loggedinUser");
    navigate("/");
  };
  return (
   <>
   <div className='Header'>
    <div className='headerinner   rounded-sm  w-[1180px] p-5 flex justify-between items-center bg-[#16041575] m-auto'>
      <div className='logo rounded-sm w-[100px]'>
        <img src="/logo.png" alt='img' className='rounded-sm' />
      </div>
      <div className='relative '>
         <div className='text-white' onClick={()=> setlogo(!logo)}>
        <IoIosContact size={35} />
      </div>
       <div className={`absolute right-[10px] transition-all duration-600 bg-[#B0B2BE] text-[#101828] p-2 ease-in-out w-[140px]  border border-[#615B6F] rounded-sm
         ${ logo ?   " block" : "hidden"}`}>
        {logo ?  <div className=' '>
          <Link  to={`/dashboard/${user.role}/profile/${user.id}`} className=' flex justify-between  items-center' ><p><AiOutlineProfile size={19} /></p> <p>Profile</p></Link>
          <Link className=' flex justify-between  items-center ' ><p
          onClick={handleLogout}
          ><CiLogout size={19} /></p> <p>Log out</p></Link>
          </div>  : ""}
      </div>
      </div>
     

    </div>
    
     
     
   </div>
   </>
  )
}

export default Header 