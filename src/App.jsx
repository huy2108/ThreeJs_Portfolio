import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App