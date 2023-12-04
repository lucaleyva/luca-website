import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Expertise from './components/Expertise';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTopBtn';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Expertise />
      <Services />
      <Testimonials />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;