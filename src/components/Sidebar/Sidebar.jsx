import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useGetGenresQuery } from '../../services/TMDB';
import { Box, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import genreIcons from '../../assets/genres';
import { SmallSidebar, SidebarModal } from '../';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useSelector, useDispatch } from 'react-redux';
import { ToggleSidebarContext } from '../../utils/ToggleSidebar';

const Sidebar = () => {
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const { data, isFetching } = useGetGenresQuery();
  const { smallSidebar, sidebarModal } = useContext(ToggleSidebarContext);

  const dispatch = useDispatch();

  const categories = [
    { label: "Popular", value: "popular"},
    { label: "Top Rated", value: "top_rated"},
    { label: "Upcoming", value: "upcoming"},
  ];

  if(!smallSidebar) {
    return (
      <div className={styles.sidebar}>
        <SidebarModal />
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
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
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
  } else {
    return <SmallSidebar />
  }
}

export default Sidebar;