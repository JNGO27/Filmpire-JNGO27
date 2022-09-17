import React, { useState } from 'react'
import { SearchRounded } from '@material-ui/icons';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';

import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
  const [query, setQuery] = useState(''); 
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      dispatch(searchMovie(query))
    }
  };

  return (
    <div className={styles.search}>
      <SearchRounded className={styles["search-icon"]}/>
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
    </div>
  )
}

export default Search