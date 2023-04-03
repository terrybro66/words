import React, { useState, useEffect } from "react";

function RandomNumberGenerator() {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    setNumber(randomNumber);
  }, []);

  return (
    <div>
      <h2>Random Number: {number}</h2>
    </div>
  );
}
export default RandomNumberGenerator;
