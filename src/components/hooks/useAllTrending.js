import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/const";
import { addAllTrending } from "../../utils/movieSlice";

const useAllTrending = () => {
  const allTrending = useSelector((store) => store.movies?.allTrending);
  const dispatch = useDispatch();
  const getAllTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAllTrending(json.results));
  };
  useEffect(() => {
    !allTrending && getAllTrending();
  }, []);
};

export default useAllTrending;
