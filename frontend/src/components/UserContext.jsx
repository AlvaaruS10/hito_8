import React, { createContext, useContext, useState } from 'react';



const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');
  const [userProfile, setUserProfile] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        setUserProfile(data.user);
      } else {
        throw new Error(data.message || "No se puede iniciar sesion");
      }
    } catch (error) {
      console.error("Error de inicio de sesion:", error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        setUserProfile(data.user);
      } else {
        throw new Error(data.message || "No se puede iniciar sesion");
      }
    } catch (error) {
      console.error("Error de inicio de sesion:", error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail('');
    setUserProfile(null);  
  };
  const fetchUserProfile = async () => {
    if (!token) {
      console.error("No hay token disponible");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,  
        }
      });
      const data = await response.json();
      if (response.ok) {
        setUserProfile(data);
      } else {
        throw new Error(data.message || "No se puede obtener el perfil de usuario");
      }
    } catch (error) {
      console.error("Error al obtener el perfil de usuario:", error);
    }
  };

  return (
    <UserContext.Provider value={{
      token, 
      email, 
      userProfile,  
      login, 
      register, 
      logout, 
      fetchUserProfile 
    }}>
      {children}
    </UserContext.Provider>
  );
};
