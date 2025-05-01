import React from 'react'
import styles from "./Feedback.module.css"

const Feedback = () => {
  
  return (
    <div>
      <div className={styles.fbBody}>
        <p>Good:</p>
        <p>Neutral:</p>
        <p>Bad:</p>
        <p>Total:</p>
        <p>Positive:</p>
        
      </div>
    </div>
  )
}

export default Feedback