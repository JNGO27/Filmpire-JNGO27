import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '../';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

import styles from './style.module.css';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page });

  if(isFetching) {
    return (
      <div>
        <CircularProgress size="4rem" className={styles["progress-circle"]}/>
      </div>
    )
  }

  if(!data.results.length) {
    return (
      <div>
        <h4>No Movies match that name.</h4>
      </div>
    )
  }

  if (error) return "An error has occured.";

  return (
    <div className={styles.movies}>
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data}/>
    </div>
  )
}

export default Movies;