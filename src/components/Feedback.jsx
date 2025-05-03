import React from "react";
import styles from "./Feedback.module.css";

const Feedback = ({ counters }) => {
  return (
    <>
      {Object.entries(counters).map(([key, value]) => (
        <p key={key}>
          {key}:{value}
        </p>
      ))}
    </>
  );
};

export default Feedback;
