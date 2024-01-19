import React, { useState } from "react";
import language from "../utils/languageConstant";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const lang = useSelector((store) => store.config?.lang);
  const [more, setMore] = useState(false);

  return (
    <div className="absolute pt-[13%]  px-6 md:px-24 text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-2xl md:text-6xl font-bold w-3/4 md:w-1/2">{title}</h1>
      {/* <p
        className={`hidden md:block py-6 text-lg ${
          overview.length > 300 ? "w-full" : "w-1/2"
        }`}
      >
        {overview}
      </p> */}
      <p
        className={`hidden md:block py-6 text-lg ${more ? "w-full" : "w-1/2"}`}
      >
        {overview.length > 400 && !more ? overview.slice(0, 400) : overview}
      </p>
      {overview.length > 400 && (
        <span
          className="hidden md:block -mt-6 mb-3 cursor-pointer underline"
          onClick={() => setMore(!more)}
        >
          {!more ? ".......Read more" : "Read less"}
        </span>
      )}
      <div className="flex">
        <button className="flex mx-2 bg-white text-black py-1 md:py-2 px-4 md:px-10 hover:bg-opacity-80 text-xl rounded-lg mt-4 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            id="play"
            className="hidden md:block"
          >
            <path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 48 48"
            id="play"
            className="block md:hidden"
          >
            <path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"></path>
          </svg>
          <p className="-mt-[2px] md:mt-2">{language[lang].play}</p>
        </button>
        <button className="hidden md:block mx-2 bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg">
          {language[lang].moreInfo}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
