import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Profile } from '../';
import { ToggleSidebarContext } from '../../utils/ToggleSidebar';

import styles from './styles.module.css';

const Content = () => {
  const { smallSidebar } = useContext(ToggleSidebarContext);

  return (
    <main className={!smallSidebar ? styles.content : styles["wider-content"]}>
        <Routes>
        <Route exact path="/movie/:id" element={<MovieInformation />} />
            <Route exact path="/actor/:id" element={<Actors />} />
            <Route exact path="/" element={<Movies />} />
            <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
  </main>
  )
}

export default Content