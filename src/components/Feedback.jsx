import React from "react";
import styles from "./Feedback.module.css";

const Feedback = ({ counters, total, positive }) => {
  return (
    <>
      {Object.entries(counters).map(([key, value]) => (
        <p key={key}>
          {key}:{value}
        </p>
      ))}
      <p>total:{total}</p>
      <p>positive:{positive}%</p>
    </>
  );
};

export default Feedback;
