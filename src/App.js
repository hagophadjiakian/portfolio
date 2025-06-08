import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Skills from './pages/Skills';
import Documentation from './pages/Documentation';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/documentation" element={<Documentation />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;