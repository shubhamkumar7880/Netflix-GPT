import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[10%] px-24 text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold w-1/2">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex">
        <button className="flex mx-2 bg-white text-black py-2 px-10 hover:bg-opacity-80 text-xl rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            id="play"
          >
            <path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"></path>
          </svg>
          <p className="mt-2"> Play</p>
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
