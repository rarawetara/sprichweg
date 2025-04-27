import { useEffect } from 'react';
import './i18n/i18n';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set CSS variables for our theme colors
    document.documentElement.style.setProperty('--primary-color', '#504E76');
    document.documentElement.style.setProperty('--secondary-color', '#F1642E');
    document.documentElement.style.setProperty('--accent-color', '#A3B565');
    document.documentElement.style.setProperty('--highlight-color', '#FCD99D');
    document.documentElement.style.setProperty('--primary-light-color', '#C4C3E3');
    document.documentElement.style.setProperty('--neutral-light-color', '#FDF8E2');
    
    // Add animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run once on load
    animateOnScroll();
    
    // Add event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Courses />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
