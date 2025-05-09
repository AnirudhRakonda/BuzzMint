import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from "./components/services/Services";
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
  return (
    <>
    
    <div className='bg-background p-2'>
      <Navbar />
      <Home />
      <About />
      <Services />
    </div>
      <Footer />
      <Copyright/>
    </>
  );
}

export default App;
