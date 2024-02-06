import React from "react";
import { useSelector } from "react-redux";
import usePlaying from "./hooks/usePlaying";

const PlayingVideo = ({ movieId, page }) => {
  usePlaying(movieId, page);
  const playing = useSelector((store) => store.movies?.playing);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          playing?.key +
          "?playlist=" +
          playing?.key +
          "&autoplay=1&loop=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PlayingVideo;
