import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '/src/components/CartContext';
import { UserProvider } from '/src/components/UserContext'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import './App.css';
import ProtectedRoute from '/src/components/ProtectedRoute'
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <UserProvider> 
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={
              <ProtectedRoute inverse redirectPath="/">
                <Register />
              </ProtectedRoute>
            } />
                   <Route path="/login" element={
              <ProtectedRoute inverse redirectPath="/">
                <Login />
              </ProtectedRoute>
            } />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="Profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;

