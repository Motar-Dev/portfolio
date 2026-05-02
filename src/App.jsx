import { useEffect } from 'react';
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
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.onscroll = () => {
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            console.log(link);
            link.classList.remove('active');
            document
              .querySelector(`.nav-link[href*=${id}]`)
              .classList.add('active');
          });
        }
      });
    };
    //   console.log(section);
    //   window.onscroll = () => {
    //     const top = window.scrollY;
    //     const offset = section.offsetTop - 150;
    //     const height = section.offsetHeight;
    //     const id = section.getAttribute('id');
    //     console.log(top);

    //     if (top >= offset && top < offset + height) {
    //       navLinks.forEach((link) => {
    //         console.log(link);
    //         link.classList.remove('active');
    //         document
    //           .querySelector(`.nav-link[href*=${id}]`)
    //           .classList.add('active');
    //       });
    //     }
    //   };
    // });
  }, []);

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
