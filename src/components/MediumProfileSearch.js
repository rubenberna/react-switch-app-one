import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.module.css'

export const MediumProfileSearch = ({ searchInput }) => {
  return (
    <div className={styles.flexColumnCentered}>
      <p>Search input: {searchInput}</p>
      <button>Search Medium profiles</button>
    </div>
  )
}

MediumProfileSearch.propTypes = {
  searchInput: PropTypes.string
}
