import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'


const Navbar = () => {
    const router=useRouter()
    const handleLogout=()=>{
        localStorage.removeItem('user');
        router.push('/login');
    }
  return (
    <Container>
    Navbar
    <button onClick={handleLogout}>Logout</button>
    </Container>
  )
}

const Container=styled.div`
    background-color: aquamarine; width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    button{
      background-color: red;
      border: 0;
      padding: 10px;
      border-radius: 10px;
      color: white;
    }

`

export default Navbar