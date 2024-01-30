import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/const";
import {
  addMovieTrailer,
  addTrailerVideo,
  addTvTrailer,
} from "../../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId, page) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  const tvTrailer = useSelector((store) => store.movies?.tvTrailer);
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
    if (page === "movie") {
      dispatch(addMovieTrailer(trailer));
    } else dispatch(addTrailerVideo(trailer));
  };

  const getTvVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredMovie = json?.results.find(
      (item) => item?.name === "Official Trailer"
    );
    const trailer = filteredMovie ?? json?.results[0];
    dispatch(addTvTrailer(trailer));
  };

  useEffect(() => {
    if (page === "movie") {
      !movieTrailer && getMovieVideos();
    } else if (page === "tv-shows") {
      !tvTrailer && getTvVideos();
    } else !trailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
