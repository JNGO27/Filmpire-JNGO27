import React from 'react';
import styles from './styles.module.css';
import { useGetGenresQuery } from '../../services/TMDB';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useSelector, useDispatch } from 'react-redux';

const SmallSidebar = () => {
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  const categories = [
    { label: "Popular", value: "popular"},
    { label: "Top Rated", value: "top_rated"},
    { label: "Upcoming", value: "upcoming"},
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.categories}>
      <h5 className={styles["title-categories"]}>Categories</h5>
        <ul>
          {categories.map(({ label, value}) => (
            <Link className={styles.category} key={value} to="/" onClick={() => dispatch(selectGenreOrCategory(value))}>
              <img className={styles["category-icon"]} src={genreIcons[label.toLowerCase()]} alt={label} />
              <li>{label}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className={styles.genres} >
      <h5 className={styles["title-genres"]}>Genres</h5>
        {isFetching ? (
          <CircularProgress className={styles["progress-circle"]}/>
        ) :
          <ul>
            {data.genres.map(({ name, id }) => (
              <Link className={styles.genre} key={id} to="/" onClick={() => dispatch(selectGenreOrCategory(id))}>
                <img className={styles["genre-icon"]} src={genreIcons[name.toLowerCase()]} alt={name} />
                <li key={name}>{name}</li>
              </Link>
            ))}
          </ul>
        }
      </div>
    </div>

  )
}

export default SmallSidebar;