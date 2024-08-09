import React from 'react';
<<<<<<< Updated upstream
import Home from './paginas/home/Home.tsx';
import './App.css';


function App() {
  return (
   <Home />
=======
import './App.css';
import Home from './paginas/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
>>>>>>> Stashed changes
  );
}
export default App;