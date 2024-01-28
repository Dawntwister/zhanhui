import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Projects from './pages/Projects.jsx';
import LearningJourney from './pages/LearningJourney.jsx';
import BlogPosts from './pages/BlogPosts.jsx';
import Layout from './components/Layout.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/learning-journey" element={<LearningJourney />} />
          <Route path="/blog" element={<BlogPosts />} />
        </Routes>
        {/* To insert in a Footer to link Github and LinkedIn */}
      </Layout>
    </Router>
  );
}

export default App;