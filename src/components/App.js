import React from 'react'
import PropTypes from 'prop-types'
import { Header } from './Header'
import { GithubProfileSearch } from './GithubProfileSearch'
import { flexColumnContainer } from './_styles'

export const App = ({ text, searchInput }) => {
  return (
    <div style={flexColumnContainer}>
      <Header text={text} />
      <GithubProfileSearch searchInput={searchInput} />
    </div>
  )
}

App.propTypes = {
  searchInput: PropTypes.string,
  text: PropTypes.string
}
