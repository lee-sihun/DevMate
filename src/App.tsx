import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/Test';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Yunha from './pages/Yunha';
import Sihun from './pages/Sihun';
import { MainLayout } from './components/layout/main.styled';
import Header from './components/common/Header/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/test" element={<Test />} />
      <Route path="/yunha" element={<Yunha />} />
      <Route path="/sihun" element={<Sihun />} />
    </Routes>
  );
}

export default App;
