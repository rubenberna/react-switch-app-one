import React from 'react'
import PropTypes from 'prop-types'
import { Header } from './Header'
import { Counter } from './Counter'
import { MediumProfileSearch } from './MediumProfileSearch'

export const App = ({ text, searchInput }) => {
  return (
    <React.Fragment>
      <Header text={text} />
      <Counter />
      <MediumProfileSearch searchInput={searchInput} />
    </React.Fragment>
  )
}

App.propTypes = {
  searchInput: PropTypes.string,
  text: PropTypes.string
}
