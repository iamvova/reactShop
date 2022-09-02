import React from 'react';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import './index.css'
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Success from './pages/Success';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import AllProducts from './pages/AllProducts';
import Announcement from './components/Announcement';

const App = () => {
  const user = useSelector((state)=> state.user.currentUser)
  return (
    <Router>
      <Navbar user={user} />
      <Announcement />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<Success />} />
        <Route path='/products/:category' element={<ProductsList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={user ? <Navigate replace to="/" /> : <Login />} />
        <Route path='/register' element={user ? <Navigate replace to="/" /> : <Register />} />
      </Routes>
    </Router>
  )
};

export default App; 