import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ({ page = "" }) => {
  let original_title;
  let overview;
  let id;
  const allTrending = useSelector((store) => store.movies?.allTrending);
  const trendingMovies = useSelector((store) => store.movies?.trendingMovies);
  const trendingTvShows = useSelector((store) => store.movies?.trendingTV);

  if (page === "movie") {
    if (!trendingMovies) return;
    else {
      original_title = trendingMovies[0]?.original_title;
      overview = trendingMovies[0]?.overview;
      id = trendingMovies[0]?.id;
    }
  } else if (page === "tv-shows") {
    if (!trendingTvShows) return;
    else {
      original_title = trendingTvShows[0]?.original_name;
      overview = trendingTvShows[0]?.overview;
      id = trendingTvShows[0]?.id;
    }
  } else {
    if (!allTrending) return;
    else {
      original_title = allTrending[0]?.original_title;
      overview = allTrending[0]?.overview;
      id = allTrending[0]?.id;
    }
  }

  return (
    <div className="pt-[40%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} page={page} />
    </div>
  );
};

export default MainContainer;
