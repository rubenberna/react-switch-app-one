import React from 'react'
import { App } from './components/App'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const AppOne = ({ text, searchInput }) => {
  return <App text={text} searchInput={searchInput} />
}

App.propTypes = {
  searchInput: PropTypes.string,
  text: PropTypes.string
}
