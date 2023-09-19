import React, { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Form = styled.form`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const RegisterAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router=useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      password,
      registerType: 'admin'
      
    };

    try {
      const res = await axios.post(`/api/register`, formData);
      console.log(res);
      alert(res.data.msg);
      router.push('/login')
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Admin Register</h2>
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
      <Button type="submit">Register</Button>
      <Link href={'/login'}>Login</Link>
    </Form>
  );
};

export default RegisterAdmin;
