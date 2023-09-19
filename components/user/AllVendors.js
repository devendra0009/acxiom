import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VendorCard from './VendorCard';

const AllVendors = () => {
  const [vendors, setVendors] = useState([]);
  const fetchVendors = async () => {
    try {
      const res = await axios.get('/api/fetchVendors');
      console.log(res);
      setVendors(res.data.vendors)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVendors();
  }, []);
  return <Container>
  <ItemGrid>
  {
    vendors.map((vendor)=>(
    <VendorCard key={vendor?._id} vendorId={vendor?._id} email={vendor?.email} category={vendor?.category} />
    ))
  }
  </ItemGrid>
  </Container>
};

const Container = styled.div`
  height: 90vh;
  width: 90%;
  margin: 0 auto;

  /* background-color: red; */
`;
const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 items per row */
  gap: 16px; /* Adjust the gap between items */
`;


export default AllVendors;
