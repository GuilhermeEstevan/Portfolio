import { useState } from 'react'
import {
  About,
  Footer,
  Hero,
  Navbar,
  Projects,
  Sidebar
} from './Components'

function App() {


  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App
