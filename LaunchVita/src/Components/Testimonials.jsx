import React from "react";
import star from "../assets/star.svg";
import profile from "../assets/profileimg.svg";

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col border-solid border-[1px] w-[350px] testimonial-shadow">
        <div className="flex border-solid border-b-[1px] justify-between p-[10px]">
            <div className="flex gap-[10px] items-center">
            <div>
            <img src={profile} alt="profile" className="mt-[5px]"/>
          </div>
          <div>
            <p className="text-[19px] font-normal" >James Gols</p>
            <p className="text-[15px] font-semibold text-[var(--primary-color)] review-heading-line-height">Sr. Android developer</p>
          </div>
            </div>
          <div className="flex gap-[5px]">
            <img src={star} alt="star" className="w-[18px] h-[20px] flex-col items-center" />
            <p>4.5</p>
          </div>
        </div>
        <p className="text-[13px] p-[10px] ml-[10px]">
          LaunchVita made creating my resume so easy! The <br/> AI suggestions helped
          me craft a professional <br/> resume that got me noticed. I landed my dream
          job <br/> in no time. Highly recommend!
        </p>
      </div>
    </>
  );
};

export default Testimonials;
