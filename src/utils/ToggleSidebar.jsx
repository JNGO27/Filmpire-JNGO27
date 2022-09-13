import React, { useState, useMemo, createContext } from 'react'

export const ToggleSidebarContext = createContext();

const ToggleSidebar = ({ children }) => {
  const [smallSidebar, setSmallSidebar] = useState(false);
  const [sidebarModal, setSidebarModal] = useState(false);
  const [sidebarModalMobile, setSidebarModalMobile] = useState(false);

  const handleSidebar = () => {
    setSmallSidebar(!smallSidebar);
  };

  const handleSidebarModal = () => {
    setSidebarModal(!sidebarModal);
  };

  const handleSidebarModalMobile = () => {
    setSidebarModalMobile(!sidebarModalMobile);
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