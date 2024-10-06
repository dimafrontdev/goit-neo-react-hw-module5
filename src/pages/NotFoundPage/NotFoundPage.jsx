import styles from "./notFoundPage.module.css";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div className={styles.title}>Page is not found</div>
      <NavLink to="/" className={styles.home}>
        Go home
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
