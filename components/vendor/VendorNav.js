import styled from '@emotion/styled';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../utils/myContext';

const VendorNav = () => {
  const [user,setUser]=useState('');
    useEffect(()=>{
      const usr=JSON.parse(localStorage.getItem('user'))
      if(usr)
      {
        setUser(usr)
      }
    },[])
  return (
    <Nav>
      <Text>Welcome, {user?.email}</Text>
      <Buttons>
        <Link href="/vendor/yourItems" className='link'>Your Items</Link>
        <Link href="/vendor/addItem" className='link'>Add a Item</Link>
      </Buttons>
    </Nav>
  );
};

const Nav = styled.div`
  width: 80%;
  margin: 1rem auto;
  border-radius: 10px;
  background-color: aquamarine;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
const Text = styled.h2``;
const Buttons = styled.div`
  display: flex;
  

  gap: 1rem;
  .link{
    background-color: darkblue;
    border-radius: 10px;
    padding: 10px;
    color: white;
  }
`;

export default VendorNav;
