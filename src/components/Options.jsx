import React, { useState } from "react";
import styles from "./Options.module.css";

const Options = (props) => {
  let good = 0;
  let neutral = 0;
  let bad = 0;

  const handleClickGood = () => {
    good = good + 1;
  };
  const handleClickBad = () => {
    bad = bad + 1;
  };
  const handleClickNeutral = () => {
    neutral = neutral + 1;
  };
  return (
    <div>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      <button >Reset</button>
    </div>
  );
};

export default Options;
