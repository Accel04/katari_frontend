import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserRequest } from '../actions/userActions';

const UserForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [dni, setDni] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserRequest({ nombre, apellidos, dni, correo, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
      <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} placeholder="Apellidos" required />
      <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} placeholder="DNI" required />
      <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Correo" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default UserForm;
