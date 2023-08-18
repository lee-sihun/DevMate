import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/Test';
import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Yunha from './pages/Yunha';
import Sihun from './pages/Sihun';
import { MainLayout } from './components/layout/main.styled';
import Header from './components/common/Header/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/test" element={<Test />} />
      <Route path="/yunha" element={<Yunha />} />
      <Route path="/sihun" element={<Sihun />} />
    </Routes>
  );
}

export default App;
