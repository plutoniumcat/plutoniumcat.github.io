import './App.css';
import Splash from './components/splash';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Social from './components/social';

function App() {
  return (
    <div className="App">
      <Splash />
      <About />
      <Projects />
      <Contact />
      <Social />
    </div>
  );
}

export default App;
