import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.module.css'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 0'
}

export const MediumProfileSearch = ({ searchInput }) => {
  return (
    <div style={containerStyle}>
      <input value={searchInput} className={styles.marginRight} />
      <button>Search Medium profiles</button>
    </div>
  )
}

MediumProfileSearch.propTypes = {
  searchInput: PropTypes.string
}
