import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Contact from './components/Contact'
import Footer from './components/Social'
import Skills from './components/Skills'
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
        <Landing/>
          <Skills/>
        <Contact/>
      <Footer/>
    </div>
  )
}

export default App
