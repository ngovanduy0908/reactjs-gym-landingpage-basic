import { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Exercises from './components/UI/Exercises';
import Start from './components/UI/Start';
import Pricing from './components/UI/Pricing';
import Testimonials from './components/UI/Testimonials';
import Footer from './components/UI/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
