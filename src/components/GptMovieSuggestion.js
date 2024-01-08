import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import FullPageLoader from "../utils/FullPageLoader";
const GptMovieSuggestion = ({ loading }) => {
  const searchedMovies = useSelector((store) => store.gpt);
  if (!searchedMovies?.gptMovies && !loading) return null;
  if (!searchedMovies?.gptMovies && loading) return <FullPageLoader />;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <MovieList
        key={searchedMovies?.gptMovies?.id}
        title={"search results for: " + searchedMovies?.searchQuery}
        movies={searchedMovies?.gptMovies}
      />
    </div>
  );
};

export default GptMovieSuggestion;
