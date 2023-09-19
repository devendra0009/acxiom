import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import axios from 'axios';
import RegisterAdmin from './admin/RegisterAdmin';
import RegisterUser from './user/RegisterUser';
import RegisterVendor from './vendor/RegisterVendor';

const RegisterContainer = styled.div`
  max-width: 300px;
  background-color: darkblue;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 5rem auto;
  padding: 1rem 2rem;
  text-align: center;
  .opt{
    display: flex;
    justify-content: center;
    gap: 1rem;
    cursor: pointer;
  }
`;

const Register = () => {
  const [registerType, setRegisterType] = useState('admin'); 

  const handleRegisterTypeChange = (e) => {
    setRegisterType(e.target.value);
  };

  return (
    <RegisterContainer>
      <h2>Register</h2>
      <div className='opt'>
        <label>
          <input
            type="radio"
            value="admin"
            checked={registerType === 'admin'}
            onChange={handleRegisterTypeChange}
          />
          Admin
        </label>
        <label>
          <input
            type="radio"
            value="user"
            checked={registerType === 'user'}
            onChange={handleRegisterTypeChange}
          />
          User
        </label>
        <label>
          <input
            type="radio"
            value="vendor"
            checked={registerType === 'vendor'}
            onChange={handleRegisterTypeChange}
          />
          Vendor
        </label>
      </div>
      {registerType === 'admin' && <RegisterAdmin />}
      {registerType === 'user' && <RegisterUser />}
      {registerType === 'vendor' && <RegisterVendor />}
    </RegisterContainer>
  );
};

export default Register;
