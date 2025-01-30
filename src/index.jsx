import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import SocialLinks from './pages/Social_Links/SocialLinks';
import { HashRouter as Router, Routes, Route } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/social_links" element={<SocialLinks />} />

      </Routes>
    </Router>
  </React.StrictMode>
);
