import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import ForgotPasswordOtp from "./Pages/ForgotPasswordOTP";
import ResetPassword from "./Pages/ResetPassword";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000
      // Optional configuration options for AOS
    });
  }, []);
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password-otp" element={<ForgotPasswordOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
