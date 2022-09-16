import React, { useContext } from 'react';
import styles from './styles.module.css';

import { Brightness4, Brightness7, AccountCircle, Menu, SearchRounded } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { Search, Sidebar, SidebarModalMobile } from '../'
import { ColorModeContext } from '../../utils/ToggleColorMode';
import { ToggleSidebarContext } from '../../utils/ToggleSidebar';

const NavBar = () => {
  const colorMode = useContext(ColorModeContext);
  const { sidebarModalMobile, handleSidebarModalMobile } = useContext(ToggleSidebarContext);
  const { pathname } = useLocation();
  const isMovieRoute = pathname.split('/')[1];

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles["icon-wrapper"]}>
          <Brightness4 onClick={colorMode.toggleColorMode} className={styles['icon-button']}/>
        </div>

        {!isMovieRoute ? <Search /> : <></>}
        
        <div className={styles.login}>
          <div className={styles["login-wrapper"]}>
            <p>LOGIN</p>
            <AccountCircle />
          </div>
        </div>
      </div>
      <div className={styles["mobile-wrapper"]}>
        <SidebarModalMobile />
        <div className={styles["mobile-top-wrapper"]}>
          <Menu className={styles["mobile-menu"]} onClick={handleSidebarModalMobile}/>
          <Brightness4 className={styles['mobile-icon-button']}/>
          <div className={styles["mobile-login"]}>
            <p>LOGIN</p>
            <AccountCircle />
          </div>
        </div>
        {!isMovieRoute ? <Search /> : <></>}
      </div>
    </div>
  )
}

export default NavBar;