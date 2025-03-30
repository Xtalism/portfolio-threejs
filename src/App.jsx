import React from 'react'
import Navbar from "./sections/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import HackerRoom from './components/HackerRoom.jsx'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar/>
      <Hero/>
    </main>
  )
}

export default App