import { Link } from "react-router-dom";

import styles from "./Links.module.css";

const Links = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/counter">
        Counter
      </Link>
    </nav>
  );
};

export default Links;
