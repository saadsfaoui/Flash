import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Testimonials from './Components/Testimonials';
import './App.css';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <SignUp />
      <Footer />
    </div>
  );
};

export default App;
