import { useState } from "react";
import login from "../assets/img/login.png";
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";

const Signup = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [uName, setuName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const [refCode, setRefCode] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const toggelPasswordVisibility = () => {
    setShowpassword(!showPassword);
  };

  return (
    <div className="flex flex-row h-full overflow-hidden">
      <div className="hidden md:block md:w-1/2">
        <img
          src={login}
          alt="Login"
          className="fixed top-0 left-0 w-1/2 h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-auto justify-center items-center p-10 h-full overflow-auto">
        <div className="w-full max-w-lg">
          <div className="font-bold flex justify-center gap-3 my-5">
            <p className="text-gray-500">Already have an account? </p>
            <Link to="/login" className="text-bold underline hover:text-theme">
              Login Here
            </Link>
          </div>

          <div className="text-center">
            <p className="text-5xl font-bold">Create Account</p>
            <p className="text-lg text-gray-500">
              Fill the form below to create an account
            </p>
          </div>

          <form onSubmit={handleLogin} className="w-full my-5">
            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="fName" className="text-lg">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="p-3 bg-gray-200 rounded-md w-full"
                value={fName}
                onChange={(e) => setfName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="lName" className="text-lg">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 bg-gray-200 rounded-md w-full"
                value={lName}
                onChange={(e) => setlName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="uName" className="text-lg">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="p-3 bg-gray-200 rounded-md w-full"
                value={uName}
                onChange={(e) => setuName(e.target.value)}
                required
              />
            </div>

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

            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="phone" className="text-lg">
                Phone Number
              </label>
              <PhoneInput
                country={"ng"} // Set default country code
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputClass="p-3 rounded-md w-full"
                className="bg-gray-200"
                containerClass="w-full"
                inputStyle={{ width: "100%" }}
              />
            </div>

            <div className="flex flex-col gap-2 my-5 relative">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="*****************"
                autoComplete="current-password"
                className="p-3 bg-gray-200 rounded-md w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute right-3 top-12 cursor-pointer"
                onClick={toggelPasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className="flex flex-col gap-2 my-5">
              <label htmlFor="refCode" className="text-lg">
                Referral Code
              </label>
              <input
                type="text"
                placeholder="Referral Code"
                className="p-3 bg-gray-200 rounded-md w-full"
                value={refCode}
                onChange={(e) => setRefCode(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full cursor-pointer ${
                    termsChecked ? "bg-theme" : "bg-gray-200"
                  }`}
                  onClick={() => setTermsChecked(!termsChecked)}
                >
                  {termsChecked && <FaCheck className="text-white" />}
                </div>
                <span>
                  I agree to the{" "}
                  <span className="underline hover:text-theme inline-block cursor-pointer">
                    Terms and Conditions
                  </span>
                </span>
              </label>

              <label className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full cursor-pointer ${
                    privacyChecked ? "bg-theme" : "bg-gray-200"
                  }`}
                  onClick={() => setPrivacyChecked(!privacyChecked)}
                >
                  {privacyChecked && <FaCheck className="text-white" />}
                </div>
                <span>
                  I agree to the{" "}
                  <span className="underline hover:text-theme inline-block cursor-pointer">
                    Privacy Policy
                  </span>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-theme text-light rounded-md mt-10 hover:bg-dark hover:text-light hover:shadow-md"
            >
              Create Account
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
        </div>
      </div>
    </div>
  );
};

export default Signup;
