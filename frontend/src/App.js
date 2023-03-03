import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TruckManagement from './pages/TruckManagement';
import Navbar from './components/Navbar';
import PoolForm from './components/PoolForm';
import TruckMap from './pages/TruckMap';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/truck' element={<TruckManagement />}></Route>
        <Route path='/truck/:truckName' element={<TruckMap />}></Route>
        <Route path='/truck/pool' element={<PoolForm />}></Route>
        {/* <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
