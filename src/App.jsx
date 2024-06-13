import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CompanyHeader from './components/CompanyHeader';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import CompanyList from './components/CompanyList';

const App = () => {
  return (
    <div>
      <CompanyHeader />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/registro" element={<UserForm />} />
        <Route path="/empresas" element={<CompanyList/>} />
      </Routes>
    </div>
  );
};

export default App;
