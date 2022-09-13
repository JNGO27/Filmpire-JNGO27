import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Profile } from '../';
import { ToggleSidebarContext } from '../../utils/ToggleSidebar';

import styles from './styles.module.css';

const Content = () => {
  const { smallSidebar } = useContext(ToggleSidebarContext);

  return (
    <main className={!smallSidebar ? styles.content : styles["wider-content"]}>
      <div className={styles.toolbar}>
        <Routes>
        <Route exact path="/movies/:id" element={<MovieInformation />} />
            <Route exact path="/actors/:id" element={<Actors />} />
            <Route exact path="/" element={<Movies />}></Route>
            <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
    </div>
  </main>
  )
}

export default Content