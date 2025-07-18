import React, { useState } from "react";
import { Link } from "react-router-dom";
// import image1 from '../assets/images/login.jpeg'; 

const Register = () => {


  const [formData , setFormData] = useState({
    name : "",
    email : "",
    phone : "",
    password : "",
    role : "",
    agreed : false,
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      ...formData,
      id: Date.now().toString(), 
    };
  
   
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("User registered successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      role: "",
      agreed: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-5xl shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left (Form Section) */}
        <div className="w-full md:w-1/2 p-6 md:p-12">
          <h1 className="text-[#7736FF] text-3xl font-bold mb-6">Registration Form</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
            value={formData.name}
              onChange={(e)=> setFormData({...formData , name : e.target.value})}
              className="border-b-2 border-[#7736FF] w-full rounded p-2 mt-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
             value = {formData.email}
              onChange= {(e)=> setFormData({...formData , email : e.target.value })}
              className="border-b-2 border-[#7736FF] w-full rounded p-2 mt-3"
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border-b-2 border-[#7736FF] w-full rounded p-2 mt-3"
              required
            />
            <input
              type="password"
               name="password"
               value={formData.password}
               onChange={(e)=> setFormData({...formData , password : e.target.password})}
               className="border-b-2 border-[#7736FF] w-full rounded p-2 mt-3"
              required
            />

            <div className="flex gap-6 mt-4 text-sm">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="investor"
                  checked={formData.role === "investor"}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />{" "}
                Investor
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="entrepreneur"
                  checked={formData.role === "entrepreneur"}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />{" "}
                Entrepreneur
              </label>
            </div>

            <div className="flex items-start mt-4 text-xs">
              <input
                type="checkbox"
                name="agreed"
               checked={formData.agreed}
                onChange={(e) =>
                  setFormData({ ...formData, agreed: e.target.checked })
                }
                className="mt-1"
              />
              <p className="ms-2">
                I agree to the terms and conditions of Business Nexus.
              </p>
            </div>

            <button
              type="submit"
              className="bg-[#7736FF] text-white font-semibold py-2 px-6 rounded mt-6 hover:bg-[#5c2fcc] transition"
            >
              Create Account
            </button>
          </form>

          <div className="mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/" className="text-[#7736FF] hover:underline">
              Sign in
            </Link>
          </div>
        </div>

        {/* Right (Image Section) */}
        <div className="w-full md:w-1/2 hidden md:block">
          {/* <img src={image1} alt="img" className="w-full h-full object-cover" /> */}
        </div>
      </div>
    </div>
  );
};

export default Register;