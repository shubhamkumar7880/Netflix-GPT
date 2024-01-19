import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/const";
import { addTrendingTV } from "../../utils/movieSlice";

const useTrendingTV = () => {
  const trendingTV = useSelector((store) => store.movies?.trendingTV);
  const dispatch = useDispatch();
  const getTrendingTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingTV(json.results));
  };
  useEffect(() => {
    !trendingTV && getTrendingTV();
  }, []);
};

export default useTrendingTV;
