import React, { useState } from 'react'
import { Boring } from './Giphy'
import styles from '../styles.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.flexColumnCentered}>
      <h3>Current count: {count}</h3>
      <div>
        <button
          className={styles.marginRight}
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          Add
        </button>
        <button onClick={() => setCount((prevState) => prevState - 1)}>
          Subtract
        </button>
      </div>
      {count > 5 && (
        <div>
          <p>That's good enough</p>
          <Boring />
        </div>
      )}
    </div>
  )
}
