import React from "react";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/instagram.svg";
import getinnow from "../assets/getappnow.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<>
  <div className="pt-[50px] pb-[25px] text-white w-full bg-black flex flex-col justify-center items-center">
    <div className="flex w-full justify-center">
      <div className="w-[1200px] flex flex-wrap justify-between pt-[10px] px-[20px]">
        {/* First Section */}
        <div className=" w-full sm:w-auto">
          <p className="text-[25px] font-bold heading-line-height">Your Gateway to <br/> Career Success</p>
          <p className="mt-[20px] text-[20px] font-normal">Follow us on</p>
          <div className="flex flex-row mt-[10px] gap-[10px] flex-wrap">
            <div>
              <img src={LinkedIn} alt="LinkedIn" className="icon-fade" />
            </div>
            <div>
              <img src={Instagram} alt="Instagram" className="icon-fade" />
            </div>
            <div>
              <img src={Twitter} alt="Twitter" className="icon-fade" />
            </div>
            <div>
              <img src={Facebook} alt="Facebook" className="icon-fade" />
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full sm:w-auto mt-4 sm:mt-0 text-[15px]">
          <p className="text-[17px] mb-[5px]">LaunchVita</p>
          <p className="cursor-pointer">
            <Link to="/">Home</Link>
          </p>
          <p className="cursor-pointer">
          <Link to="/template">Templates</Link>
          </p>
        </div>

        {/* Company Section */}
        <div className="w-full sm:w-auto mt-4 sm:mt-0 text-[15px]">
          <p className="text-[17px] mb-[5px]">Company</p>
          <p className="cursor-pointer">
          <Link to="/Contact">Conect Us</Link>
          </p>
          <p className="cursor-pointer">
            <Link to="/AboutUs">About Us</Link>
          </p>
          <p className="cursor-pointer">
            <Link to="/privacypolicy">Privacy Policy</Link>
          </p>
          <p className="cursor-pointer">
            <Link to="/termsandcondition">Terms & Conditions</Link>
          </p>
        </div>

        {/* Download Section */}
        <div className="w-full sm:w-auto mt-4 sm:mt-0">
          <p className="text-[20px] font-bold heading-line-height">Download App Now</p>
          <img src={getinnow} className="cursor-pointer w-[200px] mt-[15px]" alt="get It now" />
        </div>
      </div>
    </div>

    <div className="mt-4 text-center text-[14px]">copyright &copy; 2024, All right reserved to LaunchVita.com</div>
  </div>
</>

  
  );
};

export default Footer;
