import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";

const VideoBackground = ({ movieId, page }) => {
  useMovieTrailer(movieId, page);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  const tvTrailer = useSelector((store) => store.movies?.tvTrailer);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          (page === "movie"
            ? movieTrailer?.key
            : page === "tv-shows"
            ? tvTrailer?.key
            : trailer?.key) +
          "?playlist=" +
          (page === "movie"
            ? movieTrailer?.key
            : page === "tv-shows"
            ? tvTrailer?.key
            : trailer?.key) +
          "&autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
