import styled from "@emotion/styled";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../utils/myContext";
import ItemCard from "./ItemCard";

const YourItems = () => {
  const { user, setUser } = useContext(MyContext);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    try {
      const res = await axios.get(`/api/getItems?vendorId=${user?._id}`);
      console.log(res);
      setItems(res.data.vendor.items);
      // console.log(items);
      // alert(res.data.msg)
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);
  console.log(items);

  return (
    <Container>
      {items.length === 0 ? (
        <h1>No items to Show</h1>
      ) : (
        <ItemGrid>
          {items.map((item, idx) => (
            <ItemCard
              key={idx}
              pname={item.pname}
              pprice={item.pprice}
              vendorId={user?._id}
              fetchItems={fetchItems}
            />
          ))}
        </ItemGrid>
      )}
    </Container>
  );
};
const Container = styled.div`
  height: 90vh;
  width: 90%;
  margin: 0 auto;
  text-align: center;

`;
const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 items per row */
  gap: 16px; /* Adjust the gap between items */
`;
export default YourItems;
