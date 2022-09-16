import React, { useState, useMemo, createContext } from 'react'

export const ToggleSidebarContext = createContext();

const ToggleSidebar = ({ children }) => {
  const [smallSidebar, setSmallSidebar] = useState(false);
  const [sidebarModal, setSidebarModal] = useState(false);
  const [sidebarModalMobile, setSidebarModalMobile] = useState(false);

  const handleSidebar = () => {
    setSmallSidebar((prevValue) => !prevValue);
  };

  const handleSidebarModal = () => {
    setSidebarModal((prevValue) => !prevValue);
  };

  const handleSidebarModalMobile = () => {
    setSidebarModalMobile((prevValue) => !prevValue);
  };

  return (
    <ToggleSidebarContext.Provider value={{
      smallSidebar,
      setSmallSidebar,
      handleSidebar,
      sidebarModal,
      setSidebarModal,
      handleSidebarModal,
      sidebarModalMobile,
      setSidebarModalMobile,
      handleSidebarModalMobile,
    }}>
      {children}
    </ToggleSidebarContext.Provider>
  )
}

export default ToggleSidebar;