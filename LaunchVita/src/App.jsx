import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./Components/NavBar";
import Templates from "./Pages/Tamplates";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndCondition from "./Pages/TermsAndCondition";
import Contact from "./Pages/Contact";
import CreateCv from "./Pages/CreateCV";

const App = () => {
  return (
    <>
      <Router>
      <header className="z-[10] sticky top-0">
        <NavBar />
      </header>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/template" element={<Templates />} />
          <Route path="/AboutUs" element={<About/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandcondition" element={<TermsAndCondition />} />
          <Route path="/create" element={<CreateCv />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
