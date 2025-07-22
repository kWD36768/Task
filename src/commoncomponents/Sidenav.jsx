import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { MdWindow } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbTableShortcut } from "react-icons/tb";
import { GrOverview } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { FaQuestionCircle } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { MdImportContacts } from "react-icons/md";
import { RiFeedbackFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CgInstagram } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
const Sidenav = () => {
  const [ifnav, setifnav] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedinUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/"); // redirect if not logged in
    }
  }, [navigate]);

  if (!user) return null; // or show loading spinner
  return (
    <>
      <div className="mainsidenav">
        <div
          className={`sidenav transition duration-1000 ease-in-out overflow-hidden w-[230px]  ${
            ifnav ? "block" : "hidden"
          } `}
        >
          <div className="sidenavinner shadow-md h-[430px] leading-15 border border-black  bg-[#16041575] m-auto rounded-sm p-2">
            <Link to={`/dashboard/${user.role}/profile/${user.id}`}>
              <div className="text-white flex  items-center w-[100px]">
                {" "}
                <p>
                  {" "}
                  <CgProfile size={20} />{" "}
                </p>{" "}
                <p className="ml-3">Profile</p>
              </div>
            </Link>
           <Link to={`/dashboard/${user.role}`}>
            <div className="text-white flex  items-center  mt-4 w-[100px]">
              {" "}
              <p>
                {" "}
                <MdWindow size={20} />{" "}
              </p>{" "}
              <p className="ml-3">Dashboard</p>
            </div>
           </Link>
           
            <div className="text-white flex  items-center w-[100px]">
              {" "}
              <p>
                {" "}
                <FaQuestionCircle size={20} />{" "}
              </p>{" "}
              <p className="ml-3">About</p>
            </div>
            <div className="text-white flex  items-center w-[100px]">
              {" "}
              <p>
                {" "}
                <MdImportContacts size={20} />
              </p>{" "}
              <p className="ml-3">Contact</p>
            </div>
            <div className="text-white flex  items-center w-[100px]">
              {" "}
              <p>
                {" "}
                <RiFeedbackFill size={20} />
              </p>{" "}
              <p className="ml-3">Feedback</p>
            </div>

            <div className="text-white flex items-center ml-6 justify-center mt-3 w-[130px]">
              <p>
                <FaFacebookF size={15} />
              </p>
              <p>
                {" "}
                <FaTwitter size={15} className="ml-2" />
              </p>
              <p>
                <CgInstagram size={15} className="ml-4" />
              </p>
              <p>
                {" "}
                <FaYoutube size={15} className="ml-4" />
              </p>
            </div>

            <div className="text-white justify-right mt-2  ">
              <CiLogout
                size={20}
                onClick={() => setifnav(!ifnav)}
                className="ml-[200px] hover:cursor font-bold"
              />
            </div>
          </div>
        </div>
        <div className="mt-[355px] inline-block bg-[#16041575] p-1 rounded-sm border border-white">
          <MdLogout
            size={16}
            className={` text-white ${ifnav ? "hidden" : "block"}`}
            onClick={() => setifnav(!ifnav)}
          />
        </div>
      </div>
    </>
  );
};

export default Sidenav;
