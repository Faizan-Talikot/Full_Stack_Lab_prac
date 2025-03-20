import React from 'react'
import {ThemeContext} from './ThemeContext'
import { useContext } from 'react'

const ThemeDisplay = () => {
     const {theme} = useContext(ThemeContext)
  return (
    <div>Current Theme: {theme}</div>
  )
}

export default ThemeDisplay