import React, { useNavigator, useState } from "react";
import logo from "../assets/applogo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [d, sd] = useState("");
  useState(() => {
    sd(document.location.pathname);
  }, []);
  console.log(d);
  return (
    <>
      <div className="sticky top-0 bg-white flex w-full justify-center border-b-[1px] border-solid">
        <div className="flex-wrap flex  h-[75px] w-[1200px] justify-between items-center px-[10px]">
          <Link to="/">
          <div className="flex items-center gap-[10px] cursor-pointer">
            <img src={logo} alt="Logo" className="w-[56px] h-auto" />
            <div className="flex items-baseline">
              <p className="text-[30px] font-semibold">Launch</p>
              <p className="text-[25px] font-semibold">Vita</p>
            </div>
          </div>
          </Link>
          <div className="flex text-[18px] font-normal items-center">
            <ul className="flex gap-[21px] mt-[4px]">
              <li className="menu-hover  transition-[0.2s]">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-hover  transition-[0.2s]">
                <Link to="/template">Templates</Link>
              </li>
              <li className="menu-hover transition-[0.2s]">
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li className="menu-hover transition-[0.2s]">
                <Link to="/Contact">Connect Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-[10px]">
            <Link to="/Login">
              <button className="text-[18px] nav-button-hover-bg1 transition  px-[20px] h-[46px] rounded-[5px] grays">
                Login
              </button>
            </Link>

            <Link to="/create">
              <button className="text-[18px] nav-button-hover-bg2 text-[white] px-[20px] h-[46px] rounded-[5px] bg-[var(--primary-color)]">
                Create Your CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
