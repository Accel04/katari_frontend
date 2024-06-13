// src/components/CompanyList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompaniesRequest } from '../actions/companyActions';

const CompanyList = () => {
  const dispatch = useDispatch();
  const companies = useSelector(state => state.company.companies);
  const loading = useSelector(state => state.company.loading);
  const error = useSelector(state => state.company.error);

  useEffect(() => {
    dispatch(fetchCompaniesRequest());
  }, [dispatch]);

  if (loading) {
    return <p>Cargando empresas...</p>;
  }

  if (error) {
    return <p>Error al cargar empresas: {error}</p>;
  }

  return (
    <div>
      <h2>Listado de Empresas</h2>
      <ul>
        {companies.map(company => (
          <li key={company.id}>{company.name} ({company.subdomain})</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
