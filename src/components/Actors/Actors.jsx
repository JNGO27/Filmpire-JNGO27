import React, { useState} from 'react';
import { Button, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetActorDetailsQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import { Spinner, Error } from '../';
import styles from './styles.module.css';
import { MovieList, Pagination } from '../';

const Actors = () => {
  const [page, setPage] = useState(1);

  const { id } = useParams();

  const threeColumns = useMediaQuery(('(max-width: 1500px)'));
  const numOfMovies = threeColumns ? 7 : 9;

  const { data, isFetching, error } = useGetActorDetailsQuery(id);
  const { data: moviesData } = useGetMoviesByActorIdQuery({ id, page });

  if(isFetching) {
    return <Spinner />
  }

  if(error) {
    return <Error />
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["actor-container"]}>
        <img 
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
          alt={id}
        />
        <div className={styles["actor-info"]}>
        <div className={styles["actor-heading"]}>
          <h2 className={styles.name}>{data?.name}</h2>
          <h5 className={styles.birthday}>Born: {new Date(data?.birthday).toDateString()}</h5>
          <p>{data?.biography || 'Sorry no biography yet...'}</p>
        </div>
        <div className={styles["button-container"]}>
          <Button className={styles.button} variant="contained" color="primary" target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`}>
            IMDB
          </Button>
        </div>
        </div>
      </div>
    <div className={styles.movies}>
      <h5 className={styles.title}>Movies</h5>
      {moviesData && <MovieList movies={moviesData} numberOfMovies={numOfMovies} />}
      {moviesData?.total_pages <= 1 ? 
        null 
        : 
        <Pagination currentPage={page} setPage={setPage} totalPages={moviesData?.total_pages} />
      }
    </div>
    </div>
  )
}

export default Actors;