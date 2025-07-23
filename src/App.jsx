import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Contact from './components/Contact'
import Footer from './components/Social'
import Skills from './components/Skills'
import Music from './components/Music'
import FunJokes from './components/Jokes'
import Simpsons from './components/Simpsons'
import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Music/>
        <Landing/>
          <Skills/><div className='md:flex md:justify-around md:px-60'>
        <Contact/><div className=' flex-col'>
        <FunJokes/></div>
        </div>
      <Footer/>
    </div>
  )
}

export default App
