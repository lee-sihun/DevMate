import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/Test';
import Home from './pages/Home';
import Yunha from './pages/Yunha';
import Sihun from './pages/Sihun';
import { MainLayout } from './components/layout/main.styled';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/yunha' element={<Yunha />} />
        <Route path="/sihun" element={<Sihun />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
