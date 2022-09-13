import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const FeaturedMovie = ({ movie }) => {

  if(!movie) return null;

  return (
    <div className={styles["featured-container"]}>
      <Link to={`/movie/${movie.id}`} className={styles["featured-movie"]}>
        <div className={styles.overlay}>
          <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.title} />
          <div className={styles["text-container"]}>
            <h4 className={styles.title}>{movie.title}</h4>
            <h5 className={styles.overview}>{movie.overview}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FeaturedMovie