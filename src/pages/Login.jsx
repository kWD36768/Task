import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import image1 from '../assets/l.webp';
const Login = () => {
   
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );
    
    if (matchedUser) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      if (matchedUser.role === "investor") {
        navigate("/dashboard/investerdashboard");
      } else if (matchedUser.role === "entrepreneur") {
        navigate("/dashboard/enterpreniorsdashboar");
      }
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find((user) => user.email === forgotEmail);

    if (foundUser) {
      alert(`Your password is: ${foundUser.password}`);
    } else {
      alert("No account found with this email.");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-[#595467] flex items-center justify-center px-4">
      <div className="bg-[#F4F4F4] w-full max-w-5xl shadow-xl rounded-lg overflow-hidden flex items-center  flex-col md:flex-row">
        {/* Left section */}
        <div className="w-full md:w-1/2 p-6 md:p-12">
          <div className="mb-4">
            {/* <img src={image1} alt="logo" className="w-8" /> */}
          </div>
          <h2 className="text-2xl font-bold">
            {showForgotPassword ? "Forgot Password" : "Welcome Back"}
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            {showForgotPassword
              ? "Reset your password with your registered email"
              : "Login to your account"}
          </p>

          {/* Forgot Password Form */}
          {showForgotPassword ? (
            <form onSubmit={handleForgotPassword} className="mt-6">
              <input
                type="email"
                placeholder="Enter your registered email"
                className=" w-full rounded p-2 mb-4 bg-[#364153]"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#7736FF] w-full py-2 text-white font-semibold border-none rounded hover:bg-[#5e29d8] transition"
              >
                Recover Password
              </button>
              <p
                onClick={() => setShowForgotPassword(false)}
                className="mt-4 text-sm text-[#7736FF] cursor-pointer hover:underline text-center"
              >
                Back to Login
              </p>
            </form>
          ) : (
            // Login Form
            <form onSubmit={handleLogin}  className="mt-6">
              <input
                type="email"
                placeholder="Email"
                className="border  bg-[#364153] text-[#F4F4F4] b w-full rounded p-2 mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border  text-[#F4F4F4] bg-[#364153] w-full rounded p-2 mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="flex justify-between  items-center text-sm mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className=" hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="  w-full py-2 bg-[#FBC32C] text-[#9C9F9B] hover:bg-white hover:text-[#364153] font-semibold rounded transition"
              >
                Sign in
              </button>

              <div className="text-sm mt-6 text-center">
                Don’t have an account?{" "}
                <Link to="/register" className="text-[#0173F8]" >
                  Sign up
                </Link>
              </div>
            </form>
          )}
        </div>

        {/* Right image section */}
        <div className=" md:w-1/2 hidden md:block">
          <img
            src={image1}
            alt="login visual"
            className="w-[200px] ml-[150px]"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Login