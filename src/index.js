import React from 'react'
import { App } from './components/App'
import PropTypes from 'prop-types'

const GitHubProfile = ({ text, searchInput }) => {
  return <App text={text} searchInput={searchInput} />
}

export default GitHubProfile

App.propTypes = {
  searchInput: PropTypes.string,
  text: PropTypes.string
}
