import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../actions/userActions';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsersRequest()); // Esta acción debe estar definida en userActions y conectada a la API
  }, [dispatch]);

  return (
    <div>
      <h2>Listado de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nombre} {user.apellidos} - {user.correo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
