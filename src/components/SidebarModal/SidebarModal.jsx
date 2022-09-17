import React, { useContext } from 'react';
import { useGetGenresQuery } from '../../services/TMDB';
import { Link } from 'react-router-dom';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useDispatch } from 'react-redux';
import { ToggleSidebarContext } from '../../utils/ToggleSidebar';
import { Modal, Box, useMediaQuery } from '@mui/material';
import { SidebarSpinner } from '../';
import styles from './styles.module.css';

const style = {
  height: "100%",
  width: "280px",
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundColor: 'rgb(18, 18, 18)',
  color: 'rgb(255, 255, 255)',
  overflowY: "scroll",
};

const SidebarModal = () => {
  const { data, isFetching } = useGetGenresQuery();
  const { sidebarModal, handleSidebarModal } = useContext(ToggleSidebarContext);
  const dispatch = useDispatch();
  const matches = useMediaQuery('(max-width: 1100px) and (min-width: 680px)');

  const categories = [
    { label: "Popular", value: "popular"},
    { label: "Top Rated", value: "top_rated"},
    { label: "Upcoming", value: "upcoming"},
  ];

  const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
  // const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
  return (
    <div>
      {matches && <Modal
        open={sidebarModal}
        onClose={handleSidebarModal}
      >
      <Box sx={style}>
        <Link to="/" onClick={() => handleSidebarModal()}>
          <div className={styles["logo-wrapper"]}>
              <img src={redLogo} alt="Filmpire Logo" className={styles.logo}/>
          </div>
        </Link>
        <div className={styles.categories}>
          <h5 className={styles["title-categories"]}>Categories</h5>
            <ul>
              {categories.map(({ label, value}) => (
                <Link 
                  className={styles.category} 
                  key={value} to="/" 
                  onClick={() => dispatch(selectGenreOrCategory(value)) && handleSidebarModal()}>
                  <img className={styles["category-icon"]} src={genreIcons[label.toLowerCase()]} alt={label} />
                  <li>{label}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className={styles.genres} >
          <h5 className={styles["title-genres"]}>Genres</h5>
            {isFetching ? (
              <SidebarSpinner />
              ) :
              <ul>
                {data.genres.map(({ name, id }) => (
                  <Link 
                    className={styles.genre} 
                    key={id} to="/" 
                    onClick={() => dispatch(selectGenreOrCategory(id)) && handleSidebarModal()}>
                    <img className={styles["genre-icon"]} src={genreIcons[name.toLowerCase()]} alt={name} />
                    <li key={name}>{name}</li>
                  </Link>
                ))}
              </ul>
            }
          </div>
      )
      </Box>
      </Modal>}
    </div>
  );
}

export default SidebarModal