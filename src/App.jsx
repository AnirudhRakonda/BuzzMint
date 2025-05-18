// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/services/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

import HiringPage from './pages/HiringPage';
import PodcastPage from './pages/PodcastPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import ResearchPage from './pages/ResearchPage';

function App() {
  return (
    <div className="bg-background" style={{ overflow: 'hidden' }}>

      {/* Main content with padding */}
      <div className="p-2">
        
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Navbar />
                <Home />
                <About />
                <Services />
                <Contact />
              </>
            }
          />
          <Route path="/hiring" element={<HiringPage />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
      </div>

      {/* Footer & Copyright without padding */}
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
