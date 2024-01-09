import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstant";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/const";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = ({ setLoading }) => {
  const lang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGPTSearch = async () => {
    if (searchText.current.value === "") return;
    setLoading(true);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". only give me name of 10 movies, comma seperated like the example result given ahead. Example Result: 12th fail, Pathan, Jawan, Dunki, salaar, oppenheimer, barbie, suzume, KGF, RRR";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      return;
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // const gptMovies = [
    //   "Dhamaal",
    //   "Hera Pheri",
    //   "Golmaal: Fun Unlimited",
    //   "Andaz Apna Apna",
    //   "Chupke Chupke",
    //   "Padosan",
    //   "Bol Bachchan",
    //   "Welcome",
    //   "Housefull",
    //   "Dil Chahta Hai",
    // ];
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    const filteredMovies = tmdbResults.map((item) => item?.[0]);
    dispatch(
      addGptMovies({
        gptMovies: filteredMovies,
        searchQuery: searchText.current.value,
      })
    );
    console.log("filtered movies", filteredMovies);
    searchText.current.value = "";
    setLoading(false);
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-3 m-4 col-span-8 md:col-span-9 rounded-lg"
          placeholder={language[lang].gptSearchPlaceHolder}
        />
        <button
          className="col-span-4 md:col-span-3 m-4 py-3 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearch}
        >
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
