import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/const";
import { addTopRatedTV } from "../../utils/movieSlice";

const useTopRatedTV = () => {
  const topRatedTV = useSelector((store) => store.movies?.topRatedMovies);

  const dispatch = useDispatch();
  const getTopRatedTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedTV(json.results));
  };
  useEffect(() => {
    !topRatedTV && getTopRatedTV();
  }, []);
};

export default useTopRatedTV;
