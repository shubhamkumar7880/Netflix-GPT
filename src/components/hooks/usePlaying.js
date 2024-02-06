import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/const";
import { addPlaying, addTvTrailer } from "../../utils/movieSlice";
import { useEffect } from "react";

const usePlaying = (movieId, page) => {
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
    dispatch(addPlaying(trailer));
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
    dispatch(addPlaying(trailer));
  };

  useEffect(() => {
    if (page === "movie") {
      getMovieVideos();
    } else if (page === "tv-shows") {
      getTvVideos();
    } else getMovieVideos();
  }, []);
};

export default usePlaying;
