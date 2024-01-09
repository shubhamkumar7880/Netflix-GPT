import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import FullPageLoader from "../utils/FullPageLoader";
import language from "../utils/languageConstant";
const GptMovieSuggestion = ({ loading }) => {
  const searchedMovies = useSelector((store) => store.gpt);
  const lang = useSelector((store) => store.config.lang);
  if (!searchedMovies?.gptMovies && !loading) return null;
  if (!searchedMovies?.gptMovies && loading) return <FullPageLoader />;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <MovieList
        key={searchedMovies?.gptMovies?.id}
        title={
          language[lang].searchResultsFor + ": " + searchedMovies?.searchQuery
        }
        movies={searchedMovies?.gptMovies}
      />
    </div>
  );
};

export default GptMovieSuggestion;
