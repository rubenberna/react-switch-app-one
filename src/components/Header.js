import React from 'react'
import styles from '../styles.module.css'

export const Header = ({ text }) => (
  <div className={styles.textCenter}>
    <h2 className={styles.header}>App One</h2>
    <p>{text}</p>
  </div>
)
