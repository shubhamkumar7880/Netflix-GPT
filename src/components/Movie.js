import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import useTrendingMovies from "./hooks/useTrendingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import usePopularMovies from "./hooks/usePopularMovies";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import useTopRatedMovies from "./hooks/useTopRated";
import useUpcomingMovies from "./hooks/useUpcomingMovies";

const Movie = () => {
  const gptSearchView = useSelector((store) => store.gpt?.showGptSearch);
  useTrendingMovies();
  usePopularMovies();
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer page="movie" />
          <SecondaryConatiner page="movie" />
        </>
      )}
    </div>
  );
};

export default Movie;
