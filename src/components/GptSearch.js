import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/const";

const GptSearch = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMG} alt="bg img" />
      </div>
      <GptSearchBar setLoading={setLoading} />
      <GptMovieSuggestion loading={loading} />
    </div>
  );
};

export default GptSearch;
