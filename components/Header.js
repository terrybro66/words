import React from "react";

import styles from "./Header.module.css"; // import the CSS module

const Header = () => {
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.letter}>
        <input type="text"></input>
      </div>
      <div className={styles.letter}>
        <input type="text"></input>
      </div>
      <div className={styles.letter}>
        <input type="text"></input>
      </div>
    </div>
  );
};

export default Header;
