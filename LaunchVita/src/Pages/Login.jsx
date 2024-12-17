import React from "react";
import Footer from "../Components/Footer";

const Login = () => {
  return (
    <>
      <section className="w-[full] bg-no-repeat bgs-wave justify-center flex">
        <div className="flex w-[1100px] px-[20px] mt-[60px] flex-col">
          <p className="text-[50px] font-light login-line-heigth">
            hii Welcome <br />
            back!
          </p>
          <div className="mt-[20px] flex items-center justify-center">
            <div className="w-[350px]  flex flex-col p-[20px] login-box">
              <p className="text-[35px] font-[500]">Login</p>
              <input
                type="text"
                className="transition mt-[16px] text-[19px] border-solid border-gray-900 border-[1px] rounded-[10px] p-[10px]"
                placeholder="Username or email"
              />
              <input
                type="text"
                className="transition text-[19px] mt-[15px] border-solid border-gray-900 border-[1px] rounded-[10px] p-[10px]"
                placeholder="Password"
              />
              <p className="cursor-pointer my-[5px] text-[var(--primary-color)] text-[19px]">
                Forget password?
              </p>
              <button className=" mt-[11px] text-[18px] nav-button-hover-bg2 text-[white] px-[20px] h-[46px] rounded-[5px] bg-[var(--primary-color)]">
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
