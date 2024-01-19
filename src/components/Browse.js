import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import FullPageLoader from "../utils/FullPageLoader";
import { useNavigate } from "react-router-dom";
import useAllTrending from "./hooks/useAllTrending";
import useTrendingMovies from "./hooks/useTrendingMovies";
import useTrendingTV from "./hooks/useTrendingTV";

const Browse = () => {
  const gptSearchView = useSelector((store) => store.gpt?.showGptSearch);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/");
  }, []);
  useAllTrending();
  useTrendingMovies();
  useTrendingTV();
  if (!user) return <FullPageLoader />;
  return (
    <div>
      <Header />
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryConatiner />
        </>
      )}
    </div>
  );
};

export default Browse;
