import React from 'react';
import { Button } from '@mui/material';
import styles from './styles.module.css';

const Pagination = ({ currentPage, totalPages, setPage }) => {

  const handlePrev = () => {
    if(currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if(currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if(totalPages === 0) return null;

  return (
    <div className={styles.container}>
      <Button onClick={handlePrev}className={styles.button} variant="contained" color="primary" type="button">Prev</Button>
        <h4 className={styles["page-number"]}>{currentPage}</h4>
      <Button onClick={handleNext}className={styles.button} variant="contained" color="primary" type="button">Next</Button>
    </div>
  )
}

export default Pagination