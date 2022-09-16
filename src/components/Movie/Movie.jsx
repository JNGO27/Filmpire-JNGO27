import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { Tooltip, Rating } from '@mui/material';

const Movie = ({ movie, i }) => {
  if(movie.title && movie.poster_path && movie.vote_average) {
    return (
      <div className={styles["movie-wrapper"]}>
        <Link className={styles.link} to={`/movie/${movie.id}`}>
          <img
            alt={movie.title}
            className={styles.movie}
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "https://www.fillmurray.com/200/300"}
          />
          <h5>{movie.title}</h5>
          <Tooltip disableTouchListener variant="h5" title={`${movie.vote_average} / 10`}>
            <div className={styles["rating-wrapper"]}>
              <Rating 
                readOnly
                className={styles.rating} 
                value={movie.vote_average / 2} 
                precision={0.1}
              />
            </div>
          </Tooltip>
        </Link>
      </div>
    )
  }

}

export default Movie