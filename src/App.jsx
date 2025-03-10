import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className='main bg-black text-white h-full w-full flex'>
      <Navbar/>
    <Profile/>
    </div>
  )
}

export default App