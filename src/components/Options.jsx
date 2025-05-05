import React, { useState } from "react";
import styles from "./Options.module.css";

const Options = ({ updateFeedback, handleReset, showReset }) => {
 
  
  return (
    <div>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {showReset && (<button onClick={handleReset}>Reset</button>)}
    </div>
  );
};

export default Options;
