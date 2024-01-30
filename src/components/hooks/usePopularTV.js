import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/const";
import { addPopularTV } from "../../utils/movieSlice";

const usePopularTV = () => {
  const popularTV = useSelector((store) => store.movies?.popularTV);
  const dispatch = useDispatch();
  const getPopularTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularTV(json.results));
  };
  useEffect(() => {
    !popularTV && getPopularTV();
  }, []);
};

export default usePopularTV;
