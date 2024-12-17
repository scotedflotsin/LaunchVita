import React from "react";
import add from "../../assets/add.svg";

const Education = () => {
  return (
    <>
      <div className="p-[5px] flex-col gap-[10px] flex">
        <div className=" w-full flex pt-[10px] flex-col gap-[10px] border-solid border-[1px] border-black rounded-[10px] w-full  justify-center items-center">
          <div className="w-full flex flex-wrap gap-[10px] justify-center">
            <input
              className="w-[45%] border-[1px] border-solid border-black rounded-[7px] p-[8px]"
              type="text"
              placeholder="Course"
            />
            <input
              className="w-[45%] border-[1px] border-solid border-black rounded-[7px] p-[8px]"
              type="text"
              placeholder="Institute name"
            />
          </div>
          <div className="w-full flex flex-wrap gap-[10px] justify-center">
            <input
              className="w-[45%] border-[1px] border-solid border-black rounded-[7px] p-[8px]"
              type="text"
              placeholder="Year"
            />
            <input
              className="w-[45%] border-[1px] border-solid border-black rounded-[7px] p-[8px]"
              type="text"
              placeholder="Duration"
            />
          </div>
          <div className="w-full flex flex-wrap gap-[10px] justify-start ml-[47px] pb-[10px]">
            <input
              className="w-[45%] border-[1px] border-solid border-black rounded-[7px] p-[8px]"
              type="text"
              placeholder="Score"
            />
          </div>
        </div>

        <div className="flex justify-end m-[10px]">
          <div className=" cursor-pointer skill-button flex gap-[10px] hover:bg-blue-700">
            <p>Add more</p>
            <img src={add} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
