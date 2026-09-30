import React from 'react'
import { createContext, useState } from 'react'
import Layout from './Component/Layout';
// import ThemeButton from './Component/ThemeButton';

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light')


  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>

        <Layout />
      </ThemeContext.Provider>

    </div>
  )
}

// function Layout() {
//   return <Sidebar />
// }

// function Sidebar() {
//   return <ThemeButton />
// }
// <ThemeButton />

export default App