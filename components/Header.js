import React, { useState } from "react";

import styles from "./Header.module.css"; // import the CSS module

const Header = () => {
  const [word, setWord] = useState("");

  const words = ["cat", "dog", "bird", "fish", "mouse"];
  return (
    <div className={styles.container}>
      <div>
        {words[1].split("").map((letter) => {
          return (
            <div className={styles.letter}>
              <input
                type="text"
                placeholder={letter}
                onChange={handleChange}
              ></input>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
