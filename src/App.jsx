/**
 * Styling
 */
import './index.css';

/**
 * Components
 */
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Contact />
      </main>
    </>
  );
}

export default App;
