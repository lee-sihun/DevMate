import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/Test';
import Home from './pages/Home';
import Yunha from './pages/Yunha';
import Sihun from './pages/Sihun';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<Test />} />
      <Route path='/yunha' element={<Yunha />} />
      <Route path="/sihun" element={<Sihun />} />
    </Routes>
  );
}

export default App;
