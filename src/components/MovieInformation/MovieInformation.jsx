import React from 'react';
import { Box, CircularProgress, Modal, Rating, ButtonGroup, Button, Typography } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styles from './styles.module.css';

import { useGetMovieQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const MovieInformation = () => {
const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);

  if(isFetching) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress size="12rem" />
    </Box>
  }

  if(error) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <Link to="/">Something has gone wrong. Go back.</Link>
    </Box>
  }

  return (
    <div className={styles["movie-information-container"]}>
      <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt={data?.title} />
      <div className={styles["movie-info"]}>
        <div className={styles["movie-details"]}>
          <div className={styles["text-container"]}>
            <h3 className={styles.title}>{data?.title} ({data?.release_date?.split('-')[0]})</h3>
            <h5 className={styles.tagline}>{data?.tagline} {data?.release_date.split('-')[0]}</h5>
          </div>
          <div className={styles["movie-details-numbers"]}>
            <div className={styles.rating}>
              <Rating readOnly value={data?.vote_average / 2}/>
              <h5 className={styles["vote-average"]}>{data?.vote_average}</h5>
            </div>
            <h6 className={styles.runtime}>{data?.runtime}min {data?.spoken_languages.length > 0 ? `/ ${data.spoken_languages[0].name}` : ''}</h6>
          </div>
          <div className={styles["genres-container"]}>
            {data?.genres?.map((genre, i) => (
              <Link key={genre.name} className={styles.links} onClick={() => dispatch(selectGenreOrCategory(genre.id))} to="/">
                <img className={styles["genre-icon"]} src={genreIcons[genre.name.toLowerCase()]} alt={genre.name} /> 
                <h2 className={styles['genre-name']}>{genre?.name}</h2>
              </Link>
            ))}
          </div>
          <div className={styles.overview}>
              <h5 className={styles["overview-title"]}>Overview</h5>
              <h5 className={styles["overview-info"]}>{data?.overview}</h5>
          </div>
          <div className={styles.actors}>
            <h5 className={styles["top-cast"]}>Top Cast</h5>
            <div className={styles["actor-info"]}>
              {data && data?.credits?.cast?.map(actor => {
                if(actor?.profile_path && actor?.name) {
                  return <Link key={actor?.id} to={`/actors/${actor.id}`} className={styles["actor-links"]}>
                    <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor?.name} />
                    <h5 className={styles.name}>{actor?.name}</h5>
                    <h5 className={styles.character}>{actor?.character.split('/')[0]}</h5>
                  </Link>
                }
              }).slice(0, 6)}
            </div>
            <div className={styles["buttons-container"]}>
              <ButtonGroup size="small" variant="outlined">
                <Button target="_blank" rel="noopener noreferrer" href={data?.homepage} endIcon={<Language />}>Website</Button>
                <Button target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={<MovieIcon />}>IMDB</Button>
                <Button onClick={() => {}} href="#" endIcon={<Theaters />}>Trailer</Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="outlined">
                <Button endIcon={<ArrowBack />} sx={{ borderColor: 'primary.main', textUnderline: 'none'}}>
                  <Typography component={Link} to="/" color="inherit" variant="subtitle2" sx={{ textDecoration: 'none'}}>
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInformation