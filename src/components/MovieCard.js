import React from "react";
import { IMG_CDN } from "../utils/const";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="movie poster" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
