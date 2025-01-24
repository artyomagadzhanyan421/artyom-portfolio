import './App.css';

// Components
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
      <div className="card">
        <Hero />
        <Projects />
        <Services />
        <Socials />
      </div>
    </div>
  )
}

export default App
