import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '/src/components/CartContext'
import { useUser } from '/src/components/UserContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { total } = useCart(); 
  const { token, logout } = useUser(); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    clearCart();
    navigate('/login')
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="/">🍕 Pizzería</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Home</Link>
              {token ? (
                <>
                  <Link className="nav-link" to="/profile">Profile</Link>
                              
                </>
                
              ) : (
                <>
                  <Link className="nav-link" to="/login">Login</Link>
                  <Link className="nav-link" to="/register">Register</Link>
                  <Link className="nav-link" to="/profile">Profile</Link>
                  <Link className="nav-link" to="/NotFound">Ofertas</Link>
               </>
              )}
            </div>
          </div>
        </div>
        <div className="navbar-nav">
          <Link className="nav-link" to="/cart">🛒 Total: ${total.toLocaleString()}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar

