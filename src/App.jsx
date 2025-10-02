import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Menu from './components/Menu';
import Contact from './components/Contact';
import { useScrollAnimation } from './useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Education />
      <Experience />
      <Skills />
      <Languages />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;