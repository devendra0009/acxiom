import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import axios from 'axios';
import {  useRouter } from 'next/router';

const Form = styled.form`

background-color: red;
  max-width: 300px;
  background-color: darkblue;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 5rem auto;
  text-align: center;
  padding: 1rem 2rem;
  .opt{
    display: flex;
    justify-content: center;
    gap: 1rem;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Login = () => {
  const [loginType, setLoginType] = useState('admin'); // State to store selected login type
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router=useRouter();

  const handleLoginTypeChange = (e) => {
    setLoginType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData={
      email, password, loginType
    }
    console.log(formData);
    try {
      const response = await axios.post('/api/login', formData);
  
      alert(response.data.msg);
      localStorage.setItem('user',JSON.stringify(response.data.user));
      console.log(response.data);
      router.push('/')
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className='opt'>
        <label>
          <input
            type="radio"
            value="admin"
            checked={loginType === 'admin'}
            onChange={handleLoginTypeChange}
          />
          Admin
        </label>
        <label>
          <input
            type="radio"
            value="user"
            checked={loginType === 'user'}
            onChange={handleLoginTypeChange}
          />
          User
        </label>
        <label>
          <input
            type="radio"
            value="vendor"
            checked={loginType === 'vendor'}
            onChange={handleLoginTypeChange}
          />
          Vendor
        </label>
      </div>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Login</Button>
      <Link href={'/register'}>REGISTER</Link>
    </Form>
  );
};

export default Login;
