import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Restaurant from './pages/Restaurant';

function App() {
  return (
    <Routes>
      <Route path='/login' element={ <Login /> }/>
      <Route path='/' element={ <Home /> }/>
      <Route path='/restaurant/:id' element={ <Restaurant /> }/>
    </Routes>
  );
}

export default App;
