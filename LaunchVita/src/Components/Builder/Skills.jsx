import React, { useState } from "react";
import close from "../../assets/close.svg";

const Skills = ({ words, setWords }) => {
  const [inputValue, setInputValue] = useState(""); // State to manage input value

  // Function to add a word to the list
  const addWord = (word) => {
    if (word.trim() !== "") {
      setWords((prevWords) => [...prevWords, word.trim()]); // Add word to the list
    }
  };

  // Handle key down event
  const handleKeyDown = ({ key }) => {
    if (key === "Enter") {
      addWord(inputValue); // Add current input value to list
      setInputValue(""); // Clear input value
    }
  };
  const removeTag = (indexToRemove) => {
    setWords((prevWords) =>
      prevWords.filter((_, index) => index !== indexToRemove)
    );
  };
  console.log(words);
  return (
    <>
      <div className="p-[20px]">
        <input
          type="text"
          placeholder="Set your skills"
          className=" w-full border-solid border-[1px] border-black rounded-[7px] p-[8px]"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Controlled input
          onKeyDown={handleKeyDown} // Key down event
        />
        <div className="flex justify-between mt-[10px] px-[10px] my-[10px]">
          <p className="text-red-600">(!) press enter add skills.</p>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          {words.map((data, index) => (
            <div className="skill-button right-[40px] flex gap-[10px]">
              <p>{data}</p>
              <img
                className="cursor-pointer w-[20px]"
                src={close}
                alt=""
                onClick={() => removeTag(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
