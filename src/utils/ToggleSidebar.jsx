import React, { useState, useMemo, createContext } from 'react'

export const ToggleSidebarContext = createContext();

const ToggleSidebar = ({ children }) => {
  const [smallSidebar, setSmallSidebar] = useState(false);

  const handleSidebar = () => {
    setSmallSidebar(!smallSidebar);
    console.log(smallSidebar)
  };

  return (
    <ToggleSidebarContext.Provider value={{
      smallSidebar,
      setSmallSidebar,
      handleSidebar,
    }}>
      {children}
    </ToggleSidebarContext.Provider>
  )
}

export default ToggleSidebar;