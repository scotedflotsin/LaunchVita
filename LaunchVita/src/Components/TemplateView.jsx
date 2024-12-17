import React from "react";



const TemplateView =()=>{
    return(
        <>
       <div className="testimonial-shadow relative w-[239px] h-[329px] rounded-[15px] overflow-hidden  m-[10px]">
        <img className="absolute w-full h-full object-cover" src="https://i.pinimg.com/736x/5d/e6/75/5de675c806a055f1219aed28600f3a62.jpg" alt="Templates" />
      <div className="tamplateview-hover absolute flex justify-center items-center hover:visible  w-full h-full">
      <button className="text-[18px] invisible  nav-button-hover-bg2 text-[white] px-[40px] h-[46px] rounded-[5px] bg-[var(--primary-color)]">Choose</button>
      </div>
       </div>
        </>                                                                      
    );
}

export default TemplateView; 