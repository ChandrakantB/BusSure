import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
// import HomePageDetails from "./HomePageDetails";
// import Hoffersection from "./Hoffersection";
import PopularRoutes from "./MoreInHompage/PopularRoutes";
// import HstateBook from "./HstateBook";
import FeaturesGrid from "./MoreInHompage/FeaturesGrid";
import HDescription from "./HDescription";
// import Hcounter from "./Hcounter";
import Testimonials from "./MoreInHompage/Testimonials";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";
import Login from "./Login";
import Signup from "./Signup";
import New from "./New"
// import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  // const navigate = useNavigate();

  // const handleSearch = ({ state, from, to, date }) => {
  //   if (!state || !from || !to || !date) return;
  //   navigate(`/search?state=${state}&from=${from}&to=${to}&date=${date}`);
  // };

  return (
    <>
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
      />
      <HeroSection />
      
      <div style={{ position: "relative" }}>
        <ImageSlider />
        <New/>
      </div>

      {/* <Hoffersection /> */}

      <PopularRoutes />
      {/* <HstateBook /> */}

      <FeaturesGrid />
      <HDescription />
      <Testimonials />
      {/* <Hcounter /> */}
      <Footer />

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </>
  );
};

export default Homepage;
