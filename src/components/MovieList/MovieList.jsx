import React, { useEffect } from 'react'
import { Movie } from '../';
import styles from './styles.module.css';

const MovieList = ({ movies, numberOfMovies }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <div className={styles["movie-list"]}>
        {movies.results.slice(1, numberOfMovies).map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
      </div>
    </>
  )
}

export default MovieList