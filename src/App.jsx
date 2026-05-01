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
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='mb-20'>
        <Hero />
        <About />
        <Skill />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
