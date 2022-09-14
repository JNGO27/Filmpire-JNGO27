import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genreOrCategory: '',
  page: 1,
  searchQuery: '',
};

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState,
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;