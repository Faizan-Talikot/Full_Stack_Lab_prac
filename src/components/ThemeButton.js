import React, { useContext } from 'react'
import {ThemeContext} from './ThemeContext'

const ThemeButton = () => {
    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <button onClick={toggleTheme}>
        switch to {theme === "light"? "dark":"light"}
    </button>
  )
}

export default ThemeButton