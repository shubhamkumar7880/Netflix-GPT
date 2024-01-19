import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Movie = () => {
  const gptSearchView = useSelector((store) => store.gpt?.showGptSearch);
  return (
    <div>
      <Header />
      {gptSearchView ? <GptSearch /> : <>wait..............</>}
    </div>
  );
};

export default Movie;
