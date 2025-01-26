import './App.css';

// Components
import Card from './compoennts/Card';
import Projects from './compoennts/Projects';
import Pricing from './compoennts/Pricing';
import Faq from './compoennts/Faq';

function App() {
  return (
    <div className="App">
      <Card />
      <Projects />
      <Pricing />
      <Faq />
    </div>
  )
}

export default App
