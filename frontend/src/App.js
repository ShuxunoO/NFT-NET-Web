import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Download from './pages/Download';
import Playground from './pages/Playground';
import AcademicWall from './pages/AcademicWall';
import Contributors from './pages/Contributors';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/academic-wall" element={<AcademicWall />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
