import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import styles from "./App.module.scss";
import { useState } from "react";
import { create } from "zustand";
import { useNavigationStore } from "./stores/NavigationStore";

type State = {
  sidebarCollapsed: boolean;
};

type Action = {
  collapseSidebar: (collapsed: State["sidebarCollapsed"]) => void;
};

const useStore = create<State & Action>((set) => ({
  sidebarCollapsed: false,
  collapseSidebar: (newSidebarState) =>
    set(() => ({ sidebarCollapsed: newSidebarState })),
}));

function App() {
  const sidebarExpanded = useNavigationStore((state) => state.sidebarExpanded);
  return (
    <div className={styles.appContainer}>
      <main
        className={`${styles.outletContainer} ${
          sidebarExpanded ? styles.expanded : ""
        }`}
      >
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
