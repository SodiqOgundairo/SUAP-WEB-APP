import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import Home from "./Pages/Home";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
// import Footer from "./components/Footer";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

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
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
