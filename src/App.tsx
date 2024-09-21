import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.appContainer}>
      <Navigation />
      <main className={styles.outletContainer}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
