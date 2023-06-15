import { ToastContainer } from 'react-toastify'
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
      <ToastContainer position='top-center'/>
    </>
  )
}

export default App
