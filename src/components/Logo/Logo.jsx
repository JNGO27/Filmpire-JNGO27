import React, { useContext} from 'react'
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { Menu } from '@material-ui/icons';
import { ToggleSidebarContext } from '../../utils/ToggleSidebar';

const Logo = () => {
  const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
  const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

  const { handleSidebar, handleSidebarModal } = useContext(ToggleSidebarContext);

  return (
    <div className={styles["logo-wrapper"]}>
      <Menu className={styles.menu} onClick={handleSidebar}/>
      <Menu className={styles["modal-menu"]} onClick={handleSidebarModal} />
      <Link to="/">
        <img src={blueLogo} alt="Filmpire Logo" className={styles.logo}/>
      </Link>
    </div>
  )
}

export default Logo