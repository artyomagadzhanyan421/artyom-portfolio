import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <div className='background-grid'></div>
    </div>
  )
}

export default App
