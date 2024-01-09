import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/const";

const GptSearch = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMG}
          alt="bg img"
        />
      </div>
      <div className="">
        <GptSearchBar setLoading={setLoading} />
        <GptMovieSuggestion loading={loading} />
      </div>
    </div>
  );
};

export default GptSearch;
