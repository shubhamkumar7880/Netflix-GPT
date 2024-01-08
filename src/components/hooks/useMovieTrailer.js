import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/const";
import { addTrailerVideo } from "../../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredMovie = json?.results.find(
      (item) => item?.type === "Trailer"
    );
    const trailer = filteredMovie ?? json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
