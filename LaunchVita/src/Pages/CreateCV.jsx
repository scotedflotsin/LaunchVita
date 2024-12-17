import React, { useState } from "react";
import BasicDetails from "../Components/Builder/BasicDetails";
import ProSummary from "../Components/Builder/ProSummary";
import Skills from "../Components/Builder/Skills";
import Experiance from "../Components/Builder/Experiance";
import Education from "../Components/Builder/Education";
import Profile from "../Components/Builder/Profile";
import TamplateSelector from "../Components/Builder/TamplateSelector";
import Preview from "../Components/Builder/Preview";

const CreateCv = () => {
  const [currentPage, setPage] = useState(1);
  const headings = [
    "Fill your personal details.",
    "Describe your professional summary.",
    "Set your skills to boost your CV.",
    "Fill your experience",
    "Fill your education",
    "Profile photo",
    "Select your template",
    "Your CV ready to download",
  ];

  //profile data collection
  const [profiledata, setProfileData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    jobTitle: "",
    location: "",
    link: "",
  });
  //summary data collection.
  const [summary, setSummary] = useState({
    summaryText: "",
  });
  //skills list
  const [words, setWords] = useState([]); // State to manage the list of words
  //Experience
  const [experience, setExperience] = useState([           
    {
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const nextPage = () => {
    //code to change page in forward direct....>
    if (currentPage == 8) {
    } else {
      // if (currentPage == 1) {
      //   if (
      //     profiledata.name &&
      //     profiledata.email &&
      //     profiledata.phoneNumber &&
      //     profiledata.jobTitle &&
      //     profiledata.location
      //   ) {
      //     setPage(currentPage + 1);
      //   }
      // } else if (currentPage == 2) {
      //   if (summary.summaryText) {
      //     setPage(currentPage + 1);
      //   }
      // } else if (currentPage == 3) {
      //   if (words[0]) {
      //     setPage(currentPage + 1);
      //   }
      // } else if (currentPage == 4) {
      //   if (
      //     experience[0].jobTitle &&
      //     experience[0].startDate &&
      //     experience[0].endDate &&
      //     experience[0].description &&
      //     experience[0].companyName
      //   ) {
      //     setPage(currentPage + 1);
      //   }
      // }
      setPage(currentPage + 1);
    }
  };
  const prePage = () => {
    //code to reverse page in backward direction.....<
    if (currentPage == 1) {
    } else {
      setPage(currentPage - 1);
    }
  };
  return (
    <>
      <div className="h-[91vh]  w-full flex justify-center">
        <div className="flex-col h-[91vh]  w-[600px] items-center flex">
          <p className="text-[26px] font-[480] my-[18px]">
            {currentPage == 1
              ? headings[0]
              : currentPage == 2
              ? headings[1]
              : currentPage == 3
              ? headings[2]
              : currentPage == 4
              ? headings[3]
              : currentPage == 5
              ? headings[4]
              : currentPage == 6
              ? headings[5]
              : currentPage == 7
              ? headings[6]
              : currentPage == 8
              ? headings[7]
              : ""}
          </p>
          <div className="h-[70vh] w-full">
            <div className="flex gap-[10px] ml-[25px]">
              <div
                className={`${
                  currentPage > 1 ? "bg-blue-700" : "bg-slate-400"
                } w-[22px] h-[22px] rounded-[100px]`}
              ></div>
              <div
                className={`${
                  currentPage > 2 ? "bg-blue-700" : "bg-slate-400"
                } w-[22px] h-[22px] rounded-[100px]`}
              ></div>
              <div
                className={`${
                  currentPage > 3 ? "bg-blue-700" : "bg-slate-400"
                } w-[22px] h-[22px] rounded-[100px]`}
              ></div>
              <div
                className={`${
                  currentPage > 4 ? "bg-blue-700" : "bg-slate-400"
                } w-[22px] h-[22px] rounded-[100px]`}
              ></div>
              <div
                className={`${
                  currentPage > 5 ? "bg-blue-700" : "bg-slate-400"
                } w-[22px] h-[22px] rounded-[100px]`}
              ></div>
              <div
                className={`${
                  currentPage > 6 ? "bg-blue-700" : "bg-slate-400"
                } w-[22px] h-[22px] rounded-[100px]`}
              ></div>
              <div
                className={`${
                  currentPage > 7 ? "bg-blue-700" : "bg-slate-400"
                } w-[22px] h-[22px] rounded-[100px]`}
              ></div>
            </div>
            <div className="overflow-x-auto  hidden-scrollbar mx-[10px] mt-[15px] border-solid border-[var(--primary-color)] border-[2px] rounded-[10px] h-[60vh]">
              {currentPage == 1 ? (
                <BasicDetails
                  profiledata={profiledata}
                  setProfileData={setProfileData}
                />
              ) : currentPage == 2 ? (
                <ProSummary summary={summary} setSummary={setSummary} />
              ) : currentPage == 3 ? (
                <Skills words={words} setWords={setWords} />
              ) : currentPage == 4 ? (
                <Experiance
                  experience={experience}
                  setExperience={setExperience}
                />
              ) : currentPage == 5 ? (
                <Education />
              ) : currentPage == 6 ? (
                <Profile />
              ) : currentPage == 7 ? (
                <TamplateSelector />
              ) : currentPage == 8 ? (
                <Preview />
              ) : (
                ""
              )}
            </div>
            <div className="p-[10px] gap-[10px] flex flex-row  w-full justify-end">
              <button
                onClick={() => prePage()}
                className="w-[120px] text-[18px] nav-button-hover-bg1 transition  px-[20px] h-[46px] rounded-[5px] grays"
              >
                Back
              </button>
              <button
                onClick={() => nextPage()}
                className="w-[120px] text-[18px]  nav-button-hover-bg2 text-[white] px-[20px] h-[46px] rounded-[5px] bg-[var(--primary-color)]"
              >
                {currentPage == 8 ? "Save" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCv;
