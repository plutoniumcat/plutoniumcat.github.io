import Splash from './components/splash';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Social from './components/social';
import { useState } from 'react';
import LanguageToggle from './components/LanguageToggle';

function App() {
  const [langIsToggled, setLang] = useState(false);

  const langToggle = previous => !previous;

  return (
    <div className="App">
      <Splash />
      <LanguageToggle langIsToggled={langIsToggled} langToggle={langToggle} setLang={setLang} />
      <About langIsToggled={langIsToggled} />
      <Projects langIsToggled={langIsToggled} />
      <Contact langIsToggled={langIsToggled} />
      <Social />
    </div>
  );
}

export default App;
