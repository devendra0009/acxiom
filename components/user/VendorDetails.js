import React from "react";
import VendorItemCard from "./VendorItemCard";
import styled from "@emotion/styled";

const VendorDetails = ({ items }) => {
  console.log(items);
  return (
    <Container>
      {items.length === 0 ? (
        <h1>No items to Show</h1>
      ) : (
        <ItemGrid>
          {items.map((item, idx) => (
            <VendorItemCard key={idx} item={item} />
          ))}
        </ItemGrid>
      )}
    </Container>
  );
};
const Container = styled.div`
  /* height: 90vh; */
  text-align: center;
  width: 90%;
  margin: 0 auto;

  /* background-color: red; */
`;
const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 items per row */
  gap: 16px; /* Adjust the gap between items */
`;

export default VendorDetails;
