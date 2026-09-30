import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App';

const ThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);


    // Function to update the theme
    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
    <div>
        <button onClick={toggleTheme}>
            Current: {theme}
        </button>
    </div>
  )
}

export default ThemeButton