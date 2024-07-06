import { useState } from "react";
// import forgotpw from "../assets/img/fogotpw.png";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleNext = (e) => {
    e.preventDefault();
    const userEmail = {email}
    navigate('/forgot-password-otp', { state: userEmail })
    };

  return (
    <div className="flex flex-row h-screen items-center justify-center overflow-hidden">

      <div className="flex flex-col flex-auto justify-center items-center p-10 h-full overflow-auto">
        <div className="w-full max-w-lg">
          
          <div className="text-center">
            <p className="text-5xl font-bold">Reset Password</p>
            <p className="text-lg text-gray-500">
            Enter your registered email below
            </p>
          </div>

          <div className="w-full my-5">
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="email" className="text-lg">
              E-Mail Address
              </label>
              <input
                type="email"
                placeholder="E-Mail Address"
                autoComplete="email"
                className="p-3 bg-gray-200 rounded-md w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="button"
              className="w-full py-3 bg-theme text-light rounded-md mt-10 hover:bg-dark hover:text-light hover:shadow-md"
              onClick={handleNext}
            >
              Next
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

export default ForgotPassword;
