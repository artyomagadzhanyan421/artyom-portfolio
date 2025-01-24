import './App.css';

// Components
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <div className="card">
        <Hero />
        <Projects />
      </div>
    </div>
  )
}

export default App
