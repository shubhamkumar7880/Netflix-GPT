import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    movieTrailer: null,
    tvTrailer: null,
    popularMovies: null,
    popularTV: null,
    topRatedMovies: null,
    upcomingMovies: null,
    allTrending: null,
    trendingMovies: null,
    trendingTV: null,
    airingToday: null,
    topRatedTV: null,
    onTheAir: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addTvTrailer: (state, action) => {
      state.tvTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addPopularTV: (state, action) => {
      state.popularTV = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addAllTrending: (state, action) => {
      state.allTrending = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTrendingTV: (state, action) => {
      state.trendingTV = action.payload;
    },
    addAiringToday: (state, action) => {
      state.airingToday = action.payload;
    },
    addTopRatedTV: (state, action) => {
      state.topRatedTV = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addMovieTrailer,
  addTvTrailer,
  addPopularMovies,
  addPopularTV,
  addTopRatedMovies,
  addUpcomingMovies,
  addAllTrending,
  addTrendingMovies,
  addTrendingTV,
  addAiringToday,
  addTopRatedTV,
  addOnTheAir,
} = movieSlice.actions;
export default movieSlice.reducer;
