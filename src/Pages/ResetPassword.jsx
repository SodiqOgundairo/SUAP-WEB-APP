import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import forgotpw from "../assets/img/fogotpw.png";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowpassword] = useState("");
  const navigate = useNavigate()

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/login')
  };

  
  const toggelPasswordVisibility = () => {
    setShowpassword(!showPassword)
  }

  return (
    <div className="flex flex-row h-screen items-center justify-center overflow-hidden">

      <div className="flex flex-col flex-auto justify-center items-center p-10 h-full overflow-auto">
        <div className="w-full max-w-lg">
          
          <div className="text-center">
            <p className="text-5xl font-bold">Reset Password</p>
            <p className="text-lg text-gray-500">
            Input a new password to complete your password reset.
            </p>
          </div>

          <div className="w-full my-5">
          <div className="flex flex-col gap-2 my-5 relative">
              <label htmlFor="newPassword" className="text-lg">
                New Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="*****************"
                autoComplete="new-password"
                className="p-3 bg-gray-200 rounded-md w-full"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <div className="absolute right-3 top-12 cursor-pointer" onClick={toggelPasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

          <div className="flex flex-col gap-2 my-5 relative">
              <label htmlFor="confirmPassword" className="text-lg">
                Confirm Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="*****************"
                autoComplete="confirm-password"
                className="p-3 bg-gray-200 rounded-md w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div className="absolute right-3 top-12 cursor-pointer" onClick={toggelPasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <button
              type="button"
              className="w-full py-3 bg-theme text-light rounded-md mt-10 hover:bg-dark hover:text-light hover:shadow-md"
              onClick={handleNext}
            >
              Save
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

export default ResetPassword;