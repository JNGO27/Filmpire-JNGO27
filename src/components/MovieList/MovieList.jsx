import React from 'react'
import { Movie } from '../';
import styles from './styles.module.css';

const MovieList = ({ movies }) => {
  return (
    <div className={styles["movie-list"]}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </div>
  )
}

export default MovieList