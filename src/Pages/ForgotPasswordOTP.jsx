import { useEffect, useRef, useState } from "react";
// import forgotpw from "../assets/img/fogotpw.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ForgotPasswordOtp = () => {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState({});
  const location = useLocation()
  const navigate = useNavigate()

  useEffect (() => {
    const receivedEmail = location.state
    setUserEmail(receivedEmail)
  }, [location])

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/reset-password')
  };

    const [digits, setDigits] = useState([null, null, null, null, null, null])
    const inputRefs = useRef([])

    const handleOTPChange = (e, index) => {
      const newDigits = [...digits]
      newDigits[index] = e.target.value
      setDigits(newDigits)

      //Move focus to the next input if a digit is entered
      if(e.target.value.length === 1 && index < 5) {
        inputRefs.current[index + 1].focus()
      }

      //clear the next input if backspace is pressed with an empty value
      if(e.target.value.length === "" && index > 0) {
        inputRefs.current[index - 1].focus()
      }
    }

  return (
    <div className="flex flex-row h-screen items-center justify-center overflow-hidden">

      <div className="flex flex-col flex-auto justify-center items-center p-10 h-full overflow-auto">
        <div className="w-full max-w-lg">
          
          <div className="text-center">
            <p className="text-5xl font-bold">Reset Password</p>
            <p className="text-lg text-gray-500">
            An OTP has been sent to confirm it to reset your password.
            </p>
          </div>

          <div className="w-full my-5">
            <div className="flex flex-row justify-center gap-2 my-5">
            {digits.map((digit, index) => (
              <input 
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              className="py-3 text-center bg-gray-200 rounded-md w-4/5"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOTPChange(e, index)}
              />
            ))}
            </div>
            <Link to="/forgot-password" className="text-base underline hover:text-theme cursor-pointer">
              Wrong email, try another
            </Link>

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

export default ForgotPasswordOtp;