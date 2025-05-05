import React, { useState } from "react";
import Description from "./Description";
import Feedback from "./Feedback";
import Options from "./Options";
import styles from "./App.module.css";

const App = () => {
  const [counters, setCounters] = useState(() => {
    const saved = localStorage.getItem("counters");
    return saved
      ? JSON.parse(saved)
      : {
          good: 0,
          bad: 0,
          neutral: 0,
        };
  });

  const [total, setTotal] = useState(() => {
    const saved = localStorage.getItem("total");
    return saved ? JSON.parse(saved) : 0;
  });
  const [positive, setPositive] = useState(() => {
    const saved = localStorage.getItem("positive");
    return saved ? JSON.parse(saved) : 0;
  });
  const updateFeedback = (key) => {
    setCounters((prev) => {
      const newCount = { ...prev, [key]: prev[key] + 1 };
      const totalFeedback = newCount.good + newCount.bad + newCount.neutral;
      setTotal(totalFeedback);
      const newPositive = Math.round((newCount.good / totalFeedback) * 100);
      setPositive(newPositive);
      localStorage.setItem("counters", JSON.stringify(newCount));
      localStorage.setItem("total", JSON.stringify(totalFeedback));
      localStorage.setItem("positive", JSON.stringify(newPositive));
      return newCount;
    });
  };

  const handleReset = () => {
    const reset = {
      good: 0,
      bad: 0,
      neutral: 0,
    };
    setCounters(reset);
    setTotal(0);
    setPositive(0);
    localStorage.removeItem("counters");
    localStorage.removeItem("total");
    localStorage.removeItem("positive");
  };

  return (
    <div>
      <div className={styles.appBody}>
        <Description />

        <Options
          updateFeedback={updateFeedback}
          handleReset={handleReset}
          showReset={total > 0}
        />

        {total === 0 ? (
          <p>No feedback yet!</p>
        ) : (
          <Feedback counters={counters} total={total} positive={positive} />
        )}
      </div>
    </div>
  );
};

export default App;
