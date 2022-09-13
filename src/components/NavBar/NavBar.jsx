import React from 'react';
import styles from './styles.module.css';

import { Brightness4, Brightness7, AccountCircle, Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Search, Sidebar } from '../'

const NavBar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles["icon-wrapper"]}>
          <Brightness7 className={styles['icon-button']}/>
        </div>
        <Search />
        
        <div className={styles.login}>
          <div className={styles["login-wrapper"]}>
            <p>LOGIN</p>
            <AccountCircle />
          </div>
        </div>
      </div>
      <div className={styles["mobile-wrapper"]}>
        <div className={styles["mobile-top-wrapper"]}>
          <Menu className={styles["mobile-menu"]}/>
          <Brightness7 className={styles['mobile-icon-button']}/>
          <div className={styles["mobile-login"]}>
            <p>LOGIN</p>
            <AccountCircle />
          </div>
        </div>
        <Search />
      </div>
    </div>
  )
}

export default NavBar;