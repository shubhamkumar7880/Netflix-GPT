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
        {overview?.length > 400 && !more ? overview?.slice(0, 400) : overview}
      </p>
      {overview?.length > 400 && (
        <span
          className="hidden md:block -mt-6 mb-3 cursor-pointer underline"
          onClick={() => setMore(!more)}
        >
          {!more ? ".......Read more" : "Read less"}
        </span>
      )}
      <div className="flex">
        <button className="flex mx-2 bg-white text-black py-1 md:py-2 px-4 md:px-6 hover:bg-opacity-80 text-xl rounded-lg mt-4 md:mt-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ltr-4z3qvp e1svuwfo1"
            data-name="Play"
            aria-hidden="true"
            className="mt-1 mr-2"
          >
            <path
              d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="-mt-[2px] md:mt-0">{language[lang].play}</p>
        </button>
        <button className="flex mx-2 bg-gray-500 text-white py-1 md:py-2 px-4 md:px-6 hover:bg-opacity-80 text-xl rounded-lg mt-4 md:mt-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ltr-4z3qvp e1svuwfo1"
            data-name="CircleI"
            aria-hidden="true"
            className="mr-2"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="-mt-[2px] md:mt-0">{language[lang].moreInfo}</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
