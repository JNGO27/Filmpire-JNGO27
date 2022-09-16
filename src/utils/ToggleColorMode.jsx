import React, { useState, createContext } from 'react';

export const ColorModeContext = createContext();

const ToggleColorMode = ({ children}) => {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light');
    console.log(mode);
  }

  return (
    <ColorModeContext.Provider value={{mode, setMode, toggleColorMode}}>
      {children}
    </ColorModeContext.Provider>
  )
}

export default ToggleColorMode