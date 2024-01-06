import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import language from "../utils/languageConstant";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);
  const lang = useSelector((store) => store.config?.lang);

  return (
    <div className="bg-black">
      <div className="-mt-60 pl-16 relative z-20">
        <MovieList
          title={language[lang].nowPlaying}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={language[lang].popular}
          movies={movies.popularMovies}
        />
        <MovieList
          title={language[lang].topRated}
          movies={movies.topRatedMovies}
        />
        <MovieList
          title={language[lang].upcoming}
          movies={movies.upcomingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryConatiner;
