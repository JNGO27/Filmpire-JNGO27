import React from 'react'
import { SearchRounded } from '@material-ui/icons';
import styles from './styles.module.css';

const Search = () => {
  return (
    <div className={styles.search}>
      <SearchRounded className={styles["search-icon"]}/>
      <input type="text" />
    </div>
  )
}

export default Search