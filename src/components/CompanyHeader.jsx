import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const company = useSelector((state) => state.company.company);

  return (
    <header>
      <h1>{company ? company.nombre : 'Empresa'}</h1>
    </header>
  );
};

export default Header;
