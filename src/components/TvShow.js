import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";
import useTrendingTV from "./hooks/useTrendingTV";
import useAiringTodayTV from "./hooks/useAiringTodayTV";
import useTopRatedTV from "./hooks/useTopRatedTV";
import SecondaryConatiner from "./SecondaryConatiner";
import useOnTheAir from "./hooks/useOnTheAirTV";
import usePopularTV from "./hooks/usePopularTV";

const TvShow = () => {
  const gptSearchView = useSelector((store) => store.gpt?.showGptSearch);
  useTrendingTV();
  useAiringTodayTV();
  useTopRatedTV();
  useOnTheAir();
  usePopularTV();
  return (
    <div>
      <Header />
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer page="tv-shows" />
          <SecondaryConatiner page="tv-shows" />
        </>
      )}
    </div>
  );
};

export default TvShow;
