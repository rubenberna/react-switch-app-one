import React from 'react'
import { Header } from './Header'
import { Counter } from './Counter'

export const App = ({ text }) => {
  return (
    <React.Fragment>
      <Header text={text} />
      <Counter />
    </React.Fragment>
  )
}
