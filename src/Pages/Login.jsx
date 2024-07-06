import { useState } from "react";
import login from "../assets/img/login.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const toggelPasswordVisibility = () => {
    setShowpassword(!showPassword)
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <img
        src={login}
        className="h-1/4 md:h-full w-full md:w-1/2 object-cover object-bottom"
        alt="Login"
      />

      <div className="flex flex-col flex-1 justify-center items-center p-10">
        <div className="w-full max-w-md">
          <div className=" text-center">
            <p className="text-5xl font-bold">Welcome</p>
            <p className="text-lg text-gray-500">Sign in to continue</p>
          </div>

          <form onSubmit={handleLogin} className="w-full my-5">
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                autoComplete="email"
                className="p-3 bg-gray-200 rounded-md w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2 my-5 relative">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="*****************"
                autoComplete="current-password"
                className="p-3 bg-gray-200 rounded-md w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="absolute right-3 top-12 cursor-pointer" onClick={toggelPasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              <Link to="/forgot-password" className="hover:underline hover:text-theme text-gray-500 text-base italic cursor-pointer text-end"> Forgot Password</Link>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-theme text-light rounded-md mt-10 hover:bg-dark hover:text-light hover:shadow-md"
            >
              Sign In
            </button>
          </form>
          <div className="flex items-center my-10">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Or continue using</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex justify-center">
            <button className="p-6 bg-gray-200 rounded-md my-5">
              <FcGoogle className="text-4xl text-gray-500" />
            </button>
          </div>

          <div className="font-bold flex justify-center gap-3 my-5">
            <p className="text-gray-500">Don't have an account? </p>      
            <Link to='/signup' className="text-bold underline hover:text-theme">Sign Up Here</Link>      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
