import React, { useState } from "react";
import styles from "./Options.module.css";


const Options = ({handleClick,handleReset}) => {
  

  return (
    <div>
      <button
        onClick={() => {
          handleClick("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          handleClick("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          handleClick("bad");
        }}
      >
        Bad
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Options;
