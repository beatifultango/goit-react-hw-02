import React, { useState } from "react";
import Description from "./Description";
import Feedback from "./Feedback";
import Options from "./Options";
import styles from "./App.module.css";

const App = () => {
  const [counters, setCounters] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const handleClick = (key) => {
    setCounters((prev) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const handleReset = () => {
    setCounters({
      good: 0,
      bad: 0,
      neutral: 0,
    });
  };

  return (
    <div>
      <div className={styles.appBody}>
        <Description />
        <Options handleClick={handleClick} handleReset={handleReset} />
        <Feedback counters={counters} />
      </div>
    </div>
  );
};

export default App;
