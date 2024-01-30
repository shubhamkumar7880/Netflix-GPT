import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/const";
import { addOnTheAir } from "../../utils/movieSlice";

const useOnTheAir = () => {
  const onTheAir = useSelector((store) => store.movies?.onTheAir);
  const dispatch = useDispatch();
  const getOnTheAir = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addOnTheAir(json.results));
  };
  useEffect(() => {
    !onTheAir && getOnTheAir();
  }, []);
};

export default useOnTheAir;
