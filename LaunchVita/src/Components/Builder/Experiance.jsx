import React, { useEffect, useState } from "react";
import add from "../../assets/add.svg";

const Experiance = ({ experience, setExperience }) => {
  const [viewItem, setViewItem] = useState(0);

  useEffect(() => {
    setViewItem(experience.length);
  }, [experience]);

  // Function to handle input changes for specific fields in the array
  const handleInputChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value; // Update specific field
    setExperience(updatedExperience);
  };

  // Function to add a new blank experience
  const addNewExperience = () => {
    const newExperience = {
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setExperience([...experience, newExperience]);
  };

  return (
    <>
      <div className="p-[5px] flex-col gap-[10px] flex">
        {experience.map((data, index) => (
          <div
            key={index}
            className="w-full flex pt-[10px] flex-col gap-[10px] border-solid border-[1px] border-black rounded-[10px] w-full  justify-center items-center"
          >
            <div className="w-full flex flex-wrap gap-[10px] justify-center">
              <input
                value={data.jobTitle}
                onChange={(e) =>
                  handleInputChange(index, "jobTitle", e.target.value)
                }
                className="w-[45%] border-[1px] border-solid border-black rounded-[7px] p-[8px]"
                type="text"
                placeholder="Job title"
              />
              <input
                value={data.companyName}
                onChange={(e) =>
                  handleInputChange(index, "companyName", e.target.value)
                }
                className="w-[45%] border-[1px] border-solid border-black rounded-[7px] p-[8px]"
                type="text"
                placeholder="Company name"
              />
            </div>
            <div className="w-full flex flex-wrap gap-[10px] justify-center">
              <input
                value={data.startDate}
                onChange={(e) =>
                  handleInputChange(index, "startDate", e.target.value)
                }
                className="w-[45%] border-[1px] border-solid border-black rounded-[7px] p-[8px]"
                type="date"
                placeholder="Start date"
              />
              <input
                value={data.endDate}
                onChange={(e) =>
                  handleInputChange(index, "endDate", e.target.value)
                }
                className="w-[45%] border-[1px] border-solid border-black rounded-[7px] p-[8px]"
                type="date"
                placeholder="End date"
              />
            </div>
            <textarea
              value={data.description}
              onChange={(e) =>
                handleInputChange(index, "description", e.target.value)
              }
              className="h-[200px] w-[91.5%] disable-resize border-[1px] border-solid border-black p-[8px] rounded-[7px]"
              type="text"
              placeholder="Describe your role or responsibility."
            />
            <p className="flex justify-end w-[92%]">50/2000</p>
          </div>
        ))}

        <div className="flex justify-end m-[10px]">
          <div
            className="cursor-pointer skill-button flex gap-[10px] hover:bg-blue-700"
            onClick={addNewExperience}
          >
            <p>Add more</p>
            <img src={add} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiance;
