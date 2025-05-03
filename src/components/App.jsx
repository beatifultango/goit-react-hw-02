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

  const [total,setTotal]=useState(0);
  const [positive,setPositive]=useState(0);
  const handleClick = (key) => {
    setCounters((prev) => {
     const newCount={ ...prev, [key]: prev[key] + 1,};
     const newTotal =newCount.good+newCount.bad+newCount.neutral;
     setTotal(newTotal);
     const newPositive= parseInt(newCount.good/newTotal*100)
     setPositive(newPositive);
     return newCount;
      
    });
    
  };

  const handleReset = () => {
    setCounters({
      good: 0,
      bad: 0,
      neutral: 0,
    });
    setTotal(0);
    setPositive(0);
  };

  return (
    <div>
      <div className={styles.appBody}>
        <Description />
        <Options handleClick={handleClick} handleReset={handleReset} />
        <Feedback counters={counters} total={total} positive={positive}/>
      </div>
    </div>
  );
};

export default App;
