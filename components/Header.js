import React, { useState, useEffect } from "react";
import { Howl } from "howler";

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
  const [inputClass, setInputClass] = useState("");
  const [yay, setYay] = useState(null);
  const [rasp, setRasp] = useState(null);

  const playSound = (sound) => {
    sound.play();
  };
  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    setYay(
      new Howl({
        src: ["/sounds/yay.mp3"],
      })
    );
    setRasp(
      new Howl({
        src: ["/sounds/rasp.mp3"],
      })
    );
  }, []);

  useEffect(() => {
    const randomNumber = getRanNum();
    setWord(words[randomNumber]);
    setCodepoint(emojis[randomNumber].codepoint);
  }, [word]);

  function getRanNum() {
    return Math.floor(Math.random() * words.length);
  }

  const handleChange = (letter, event) => {
    if (letter === event.target.value) {
      //add a class to the input

      event.target.style.backgroundColor = "green";
      playSound(yay);
    } else {
      event.target.style.backgroundColor = "red";
      playSound(rasp);
    }
  };

  return (
    <>
      {" "}
      <div className={styles.container}>
        <div className={styles.emoji}>{codepoint}</div>
        {word.split("").map((letter, i) => {
          return (
            <div className={styles.letter} key={i}>
              <input
                className={`${inputClass}`}
                type="text"
                placeholder={letter}
                onChange={(event) => {
                  event.persist();
                  handleChange(letter, event);
                }}
              ></input>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={reloadPage}>Reload Page</button>
      </div>
    </>
  );
};

export default Header;
