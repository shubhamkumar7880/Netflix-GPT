import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/const";
import { addAiringToday } from "../../utils/movieSlice";

const useAiringTodayTV = () => {
  const airingToday = useSelector((store) => store.movies?.airingToday);
  const dispatch = useDispatch();
  const getAiringToday = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAiringToday(json.results));
  };
  useEffect(() => {
    !airingToday && getAiringToday();
  }, []);
};

export default useAiringTodayTV;
