import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import language from "../utils/languageConstant";

const SecondaryConatiner = ({ page = "" }) => {
  const movies = useSelector((store) => store.movies);
  const lang = useSelector((store) => store.config?.lang);
  let movieArr = [
    "allTrending",
    "nowPlayingMovies",
    "airingToday",
    "topRatedMovies",
    "topRatedTV",
  ];
  if (page === "movie") {
    movieArr = [
      "trendingMovies",
      "nowPlayingMovies",
      "popularMovies",
      "topRatedMovies",
      "upcomingMovies",
    ];
  }
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-56 pl-4 md:pl-16 relative z-20">
        {movieArr.map((movie) => (
          <MovieList title={language[lang]?.[movie]} movies={movies?.[movie]} />
        ))}
      </div>
    </div>
  );
};

export default SecondaryConatiner;
