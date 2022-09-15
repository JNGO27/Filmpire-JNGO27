import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '../';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import styles from './style.module.css';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie';

import { Pagination } from '../';


const Movies = () => {
  const fourColumns = useMediaQuery(('(max-width: 1500px)'));
  const numOfMovies = fourColumns ? 13 : 17;

  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });
  if(isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    )
  }

  if(!data.results.length) {
    return (
      <div className={styles["no-match"]}>
        <h4>No Movies match that name.</h4>
        <h4>Please search for something else. 🎥</h4>
      </div>
    )
  }

  if (error) return "An error has occured.";

  return (
    <div className={styles.movies}>
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data} numberOfMovies={numOfMovies}/>
      <Pagination />
    </div>
  )
}

export default Movies;