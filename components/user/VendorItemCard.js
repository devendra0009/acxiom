import styled from '@emotion/styled';
import React from 'react'

const VendorItemCard = ({item}) => {
  return (
    <Card>
    <h1>{item.pname}</h1>
    <h3>Rs.{item.pprice}</h3>
    </Card>
  )
}

const Card = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default VendorItemCard