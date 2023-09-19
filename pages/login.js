import React from 'react'
import Login from '../components/Login'
import styled from '@emotion/styled'

const login = () => {
  return (
    <Container><Login/></Container>
  )
}

const Container=styled.div`
  
  height: 100vh;
`

export default login