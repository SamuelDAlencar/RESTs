import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Restaurant from './pages/Restaurant';
import HomeProvider from './provider/HomeProvider';

function App() {
  return (
    <HomeProvider>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/restaurant/:id' element={<Restaurant />} />
      </Routes>
    </HomeProvider>
  );
}

export default App;
