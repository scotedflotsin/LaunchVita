import React, { useState } from "react";
import rocket from "../../assets/AI.svg";
import axios from "axios";

const ProSummary = ({ summary, setSummary }) => {
  const [loading, setLoading] = useState(false);
  const aiURL = import.meta.env.VITE_AI_URL;
  const genrateDescription = async () => {
    //request
    setLoading(true);
    if (summary) {
      try {
        const response = await axios.get(
          aiURL + summary.summaryText
        );
        if (response.data.code == 201) {

          typeTextEffect(response.data.data[0].response);
          setLoading(false);
        //console.log(response.data.data[0].response );
        } else {
          setSummary({ 'summaryText': response.data.message });
         setLoading(false);
        }
      } catch (e) {
        console.log(e.message);
        setLoading(false);
      }
    } else {
    }
  };
  const typeTextEffect = (text) => {
    let index = 0; // Index to track how many characters are displayed
    const typingInterval = 10; // Time delay (ms) between each character

    // Clear the current text before starting the typing effect
    setSummary({ summaryText: "" });

    const interval = setInterval(() => {
      setSummary({ summaryText: text.slice(0, index + 1) }); // Update state to show substring
      index++;

      if (index === text.length) {
        clearInterval(interval); // Stop typing effect when all characters are shown
      }
    }, typingInterval);
  };


  return (
    <>
      <div className="w-full p-5 relative">
        <textarea
          value={summary.summaryText}
          onChange={(e) => setSummary({ summaryText: e.target.value })}
          placeholder="Start writing here or write enough to get AI support"
          className="textarea w-full h-[350px] p-4 border border-gray-300 rounded-[10px] disable-resize outline-none"
        ></textarea>
        {/* <p className="flex justify-end">16/10000</p> */}
        <div
          onClick={() => genrateDescription()}
          className="cursor-pointer AI-button absolute bottom-[50px] right-[40px] flex gap-[10px]"
        >
          <img
            src={rocket}
            alt=""
            className={`${loading ? "spinning-image" : ""}`}
          />
          <p className={`${loading ? "hidden" : "visible"}`}>Try LaunchVita AI</p>
        </div>
      </div>
    </>
  );
};

export default ProSummary;
