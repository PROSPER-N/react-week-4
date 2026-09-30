import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App';
import Sidebar from './Sidebar'

const Layout = () => {
    const { theme } = useContext(ThemeContext);


  return (
    <div style={{
        backgroundColor: theme === 'light' ? '#fff' : '#131010',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
    }}>
        <h1>Layout</h1>
        <Sidebar />
    </div>
  )
}

export default Layout