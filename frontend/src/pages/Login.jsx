import React, { useState } from "react";
import { useUser } from '/src/components/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

   
    if (!email.trim() || !password.trim()) {
      setError('Todos los campos son obligatorios');
      setSuccess(false);
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setSuccess(false);
      return;
    }

    try {
      const loginSuccess = await login(email, password);
      if (loginSuccess) {
        setSuccess(true);
        setError('');
        navigate('/profile');
      } else {
        setError('Inicio de sesión fallido');
        setSuccess(false);
      }
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
      setSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="formulario" onSubmit={handleLogin}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>Inicio de sesión exitoso</p>}

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;


