import React from "react";
import profile from "../../assets/profileimg.svg";
import add from "../../assets/add.svg";


const Profile =()=>{
    return(
        <>
       <div className="pt-[80px] flex flex-col justify-center items-center gap-[35px]">
        <img src={profile} alt="" className="w-[150px]" />
        <div className=" cursor-pointer skill-button flex gap-[10px] hover:bg-blue-700">
    <p>Add profile photo</p>
          <img src={add} alt="" />
        </div>
    </div>

        </>
    );
}


export default Profile;