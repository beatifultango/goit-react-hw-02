import React, { useState } from "react";
import Description from "./Description";
import Feedback from "./Feedback";
import Options from "./Options";
import styles from "./App.module.css"

const App = () => {
 
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });


  return (
    <div>
      <div className={styles.appBody}>
      <Description />
      <Options />
      <Feedback/>
      </div>
    </div>
  );
};

export default App;
