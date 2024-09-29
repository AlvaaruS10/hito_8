import React, { useEffect } from 'react';
import { useUser } from '/src/components/UserContext';
import { useCart } from '/src/components/CartContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { userProfile, fetchUserProfile, token, logout } = useUser();
  const { clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && !userProfile) {
      fetchUserProfile();
    }
  }, [fetchUserProfile, token, userProfile]);

  const handleLogout = () => {
    logout();
    clearCart();  
    navigate('/login');
  };

  if (!userProfile) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div className="profile-container">
      <h1>Perfil del Usuario</h1>
      <p>Email: {userProfile.email}</p>
      <button onClick={handleLogout} className="btn btn-primary">Cerrar Sesión</button>
    </div>
  );
};

export default Profile;


