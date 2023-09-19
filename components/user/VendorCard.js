import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react'

const VendorCard = ({vendorId,email,category}) => {
  return (
    <Card>
        <h2>{email}</h2>
        <h3>{category}</h3>
        <Link href={`/user/shop/${vendorId}`} className='link'>Shop Item</Link>
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
  .link{
    background-color: darkblue;
    border-radius: 10px;
    color: white;
    padding: 7px;
  }
`;

export default VendorCard