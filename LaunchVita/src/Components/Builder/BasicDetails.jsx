import React, { useEffect, useState } from "react";

const BasicDetails = ({ profiledata, setProfileData }) => {
  // console.log(profiledata.name);
  // console.log(profiledata.email);
  // console.log(profiledata.phoneNumber);
  // console.log(profiledata.jobTitle);
  // console.log(profiledata.location);
  // console.log(profiledata.link);

  return (
    <>
      <div className="w-full gap-[20px] flex flex-col p-[20px]">
        <input
          value={profiledata.name}
          onChange={(e) =>
            setProfileData({ ...profiledata, name: e.target.value })
          }
          type="text"
          placeholder="Your full name"
          className=" w-full border-solid border-[1px] border-black rounded-[7px] p-[8px]"
        />
        <input
          value={profiledata.email}
          onChange={(e) =>
            setProfileData({ ...profiledata, email: e.target.value })
          }
          type="email"
          placeholder="Your valid email"
          className=" w-full border-solid border-[1px] border-black rounded-[7px] p-[8px]"
        />
        <input
          value={profiledata.phoneNumber}
          onChange={(e) =>
            setProfileData({ ...profiledata, phoneNumber: e.target.value })
          }
          type="number"
          placeholder="Your valid contact number"
          className="no-spin w-full border-solid border-[1px] border-black rounded-[7px] p-[8px]"
        />
        <input
          value={profiledata.jobTitle}
          onChange={(e) =>
            setProfileData({ ...profiledata, jobTitle: e.target.value })
          }
          type="text"
          placeholder="Your job title"
          className=" w-full border-solid border-[1px] border-black rounded-[7px] p-[8px]"
        />
        <input
          value={profiledata.location}
          onChange={(e) =>
            setProfileData({ ...profiledata, location: e.target.value })
          }
          type="text"
          placeholder="Location e.g Delhi, India"
          className=" w-full border-solid border-[1px] border-black rounded-[7px] p-[8px]"
        />
        <input
          value={profiledata.link}
          onChange={(e) =>
            setProfileData({ ...profiledata, link: e.target.value })
          }
          type="text"
          placeholder="webiste or social link(Optional)"
          className=" w-full border-solid border-[1px] border-black rounded-[7px] p-[8px]"
        />
      </div>
    </>
  );
};

export default BasicDetails;
