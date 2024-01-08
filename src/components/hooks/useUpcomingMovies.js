import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/const";
import { addUpcomingMovies } from "../../utils/movieSlice";

const useUpcomingMovies = () => {
  const upComingMovies = useSelector((store) => store.movies?.upcomingMovies);

  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    !upComingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
