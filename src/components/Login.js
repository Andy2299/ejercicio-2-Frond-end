import React, { useState } from 'react';
import Swal from 'sweetalert2';  // Importa SweetAlert
import './css/base.css';

const Login = ({ onLogin, onError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://three-points.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('userToken', data.token);
        onLogin(username);
        Swal.fire('Éxito', 'Has iniciado sesión correctamente', 'success');  // Alerta de éxito
      } else {
        onError('Error en el inicio de sesión. Inténtalo de nuevo.');
        Swal.fire('Error', 'Error en el inicio de sesión. Inténtalo de nuevo.', 'error');  // Alerta de error
      }
    } catch (error) {
      onError('Error en el inicio de sesión. Inténtalo de nuevo.');
      Swal.fire('Error', 'Error en el inicio de sesión. Inténtalo de nuevo.', 'error');  // Alerta de error
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar</button>
      </form>
    </div>
  );
};

export default Login;
