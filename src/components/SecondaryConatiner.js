import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import language from "../utils/languageConstant";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);
  const lang = useSelector((store) => store.config?.lang);

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-56 pl-4 md:pl-16 relative z-20">
        <MovieList
          title={language[lang].trending}
          movies={movies.allTrending}
        />
        <MovieList
          title={language[lang].nowPlaying}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={language[lang].airingToday}
          movies={movies.airingToday}
        />
        <MovieList
          title={language[lang].topRatedMovies}
          movies={movies.topRatedMovies}
        />
        <MovieList
          title={language[lang].topRatedMovies}
          movies={movies.topRatedTV}
        />
      </div>
    </div>
  );
};

export default SecondaryConatiner;
