import React, { useState, useEffect } from "react";

import styles from "./Header.module.css"; // import the CSS module

import emojis from "./emojis";

const Header = () => {
  const words = emojis.reduce((acc, emoji) => {
    acc.push(emoji.name.toLowerCase());
    return acc;
  }, []);
  const [word, setWord] = useState("");
  const [ranNum, setRanNum] = useState(0);
  const [letter, setLetter] = useState("");
  const [codepoint, setCodepoint] = useState("");

  useEffect(() => {
    const randomNumber = getRanNum();
    setWord(words[randomNumber]);
    setCodepoint(emojis[randomNumber].codepoint);
  }, [word]);

  function getRanNum() {
    return Math.floor(Math.random() * words.length);
  }

  const handleChange = (e) => {
    setLetter(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.emoji}>{codepoint}</div>
      {word.split("").map((letter, i) => {
        return (
          <div className={styles.letter} key={i}>
            <input
              type="text"
              placeholder={letter}
              onChange={handleChange}
            ></input>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
