import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/Test';
import Home from './pages/Home';
import Yunha from './pages/Yunha';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<Test />} />
      <Route path='/yunha' element={<Yunha />} />
    </Routes>
  );
}

export default App;
