import React from 'react'
import { textCenter, header } from './_styles'

export const Header = ({ text }) => (
  <div style={textCenter}>
    <h2 style={header}>App One</h2>
    <p>{text}</p>
  </div>
)
