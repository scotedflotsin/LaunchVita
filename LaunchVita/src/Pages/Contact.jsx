import React from "react";
import logo from "../assets/applogo.svg";
import Footer from "../Components/Footer";
import contactimg from "../assets/contactimag.svg";
import emailicon from "../assets/emailicon.svg";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/instagram.svg";
import getinnow from "../assets/getappnow.svg";

const Contact = () => {
  return (
    <>
      <section className="w-[full] bg-no-repeat bgs-wave justify-center flex">
        <div className="flex flex-row  w-[1100px] px-[20px] mt-[100px] flex-col">
          <p className="text-[50px] font-light">Get In Touch</p>
          <div className="h-[85px] flex items-center gap-[10px] cursor-pointer">
            <img src={logo} alt="Logo" className="w-[56px] h-auto" />
            <div className="flex items-baseline">
              <p className="text-[30px] font-semibold">Launch</p>
              <p className="text-[25px] font-semibold">Vita</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center justify-center flex-wrap">
              <div className="flex flex-col justify-center w-[400px] mt-[60px]">
                <p className="text-[24px] font-[400] mb-[20px]">
                  Drop your query us now!
                </p>
                <input
                  className="border-solid border-[1px] border-black p-[10px] rounded-[5px] mt-[5px]"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="border-solid border-[1px] border-black p-[10px] rounded-[5px] mt-[5px]"
                  type="text"
                  placeholder="Your Email"
                />
                <textarea
                  aria-multiline
                  className="disable-resize h-[230px] border-solid border-[1px] border-black p-[10px] rounded-[5px] mt-[5px]"
                  type="text"
                  placeholder="Drop your message here..."
                />
                <button className="mt-[20px] text-[18px] nav-button-hover-bg2 text-[white] px-[20px] h-[46px] rounded-[5px] bg-[var(--primary-color)]">
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[9px] mt-[70px] mb-[50px]">
            <p className="font-medium">Also you connect with us from there!</p>
            <div className="flex items-center gap-[20px]">
              <img src={emailicon} alt="" />
              <p>contact@launchvita.com</p>
            </div>
            <div>
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
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
