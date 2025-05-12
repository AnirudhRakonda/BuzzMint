import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from "./components/services/Services";
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <div className='bg-background p-2' style={{ overflow: 'hidden' }}>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Contact/>
      </div>
      <Footer />
      <Copyright/>
    </>
  );
}

export default App;
