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
import useUserContext from './hooks/useUserContext';
import TrackOrder from './pages/TrackOrder';
import StockItemPage from './pages/StockItemPage';
import ShoppingPage from './pages/ShoppingPage';
import Cart from './pages/Cart';
import useCartContext from './hooks/useCartContext';
import FarmerSubscription from './pages/FarmerSubscription';
import BuyerSubscription from './pages/BuyerSubscription';
import ComboItemPage from './pages/ComboItemPage';

function App() {
  const { user } = useUserContext()
  const {cart} = useCartContext()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />}></Route>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path='/shop' element={<ShoppingPage />}></Route>
        <Route path='/truck' element={<TruckManagement />}></Route>
        <Route path='/truck/:truckName' element={<TruckMap />}></Route>
        <Route path='/truck/pool' element={<PoolForm />}></Route>
        <Route path='/trackOrder' element={<TrackOrder />}></Route>
        <Route path='/items/:id' element={<StockItemPage />} />
        <Route path='/cart' element={cart ? <Cart /> : <Navigate to="/"/>} />
        <Route path='/farmersub' element={<FarmerSubscription />}></Route>
        <Route path='/buyersub' element={<BuyerSubscription />}></Route>
        <Route path='/combos/:id' element={<ComboItemPage />}></Route>

        {/* <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
