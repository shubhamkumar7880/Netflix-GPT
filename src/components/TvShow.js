import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";
import useTrendingTV from "./hooks/useTrendingTV";

const TvShow = () => {
  const gptSearchView = useSelector((store) => store.gpt?.showGptSearch);
  useTrendingTV();
  return (
    <div>
      <Header />
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer page="tv-shows" />
          {/* <SecondaryConatiner page="tv-shows" /> */}
        </>
      )}
    </div>
  );
};

export default TvShow;
