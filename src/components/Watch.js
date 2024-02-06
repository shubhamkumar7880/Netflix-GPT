import React from "react";
import { useLocation } from "react-router-dom";
import PlayingVideo from "./PlayingVideo";

const Watch = () => {
  const location = useLocation();
  const movieId = location.pathname.slice(7);
  return (
    <PlayingVideo
      movieId={movieId}
      page={location?.search ? location?.search?.slice(7) : ""}
    />
  );
};

export default Watch;
