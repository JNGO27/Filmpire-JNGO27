import React from 'react';
import { Logo, Sidebar, NavBar, Content } from './';
import styles from './styles.module.css';
import store from '../app/store';
import { Provider } from 'react-redux';
import ToggleSidebar from '../utils/ToggleSidebar';
import ToggleColorMode from '../utils/ToggleColorMode';

const App = () => {

  return (
    <Provider store={store}>
      <ToggleColorMode>
        <ToggleSidebar>
          <div className={styles.app}>
            <Logo />
            <Sidebar />
            <NavBar />
            <Content />
          </div>
        </ToggleSidebar>
      </ToggleColorMode>
    </Provider>
  );
};

export default App;