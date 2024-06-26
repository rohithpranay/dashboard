import React from "react";
import { Outlet } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Navbar, Sidebar, ThemeSettings } from "./components";
import { useGlobalContext } from "./contexts/ContextProvider";

const AppLayout = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useGlobalContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <button
            type="button"
            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
            style={{ background: currentColor, borderRadius: "50%" }}
            onClick={() => setThemeSettings(true)}
          >
            <FiSettings />
          </button>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            "dark:bg-main-dark-bg bg-main-bg min-h-screen w-full" +
            (activeMenu ? " md:ml-72" : " flex-2")
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          {themeSettings && <ThemeSettings />}
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
