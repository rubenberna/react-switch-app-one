import React from 'react'
import PropTypes from 'prop-types'

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
      <span>{searchInput}</span>
      <button>Search Medium profiles</button>
    </div>
  )
}

MediumProfileSearch.propTypes = {
  searchInput: PropTypes.string
}
