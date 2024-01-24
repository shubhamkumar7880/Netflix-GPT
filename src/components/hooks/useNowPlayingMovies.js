import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/const";
import { addNowPlayingMovies } from "../../utils/movieSlice";

const useNowPlayingMovies = () => {
  const nowPlayingmovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !nowPlayingmovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
