import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: false,
    searchQuery: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { gptMovies, searchQuery } = action.payload;
      state.gptMovies = gptMovies;
      state.searchQuery = searchQuery;
    },
  },
});

export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;

export default gptSlice.reducer;
