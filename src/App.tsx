import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/Test';
import Home from './pages/Home';
import Sihun from './pages/Sihun';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/sihun" element={<Sihun />} />
    </Routes>
  );
}

export default App;
