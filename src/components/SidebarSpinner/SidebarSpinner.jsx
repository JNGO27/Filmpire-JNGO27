import React from 'react'
import { CircularProgress } from '@mui/material';
import styles from './styles.module.css';

const Spinner = () => {
  return (
    <div className={styles["spinner-container"]}>
      <CircularProgress className={styles.spinner}/>
    </div>
  )
}

export default Spinner