import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <header className={styles.navWrapper}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(isActive && styles.active, styles.link)
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            clsx(isActive && styles.active, styles.link)
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
