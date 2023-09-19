import styled from '@emotion/styled';
import axios from 'axios';
import React, { useState } from 'react';
import { BiSolidEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';

const ItemCard = ({ pname, pprice, vendorId, fetchItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(pname);
  const [editedPrice, setEditedPrice] = useState(pprice);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    console.log(editedName, editedPrice);
    try {
      const updatedItem = {
        editedName,
        editedPrice,
        vendorId,
        prevName:pname,
        prevPrice:pprice
      };
      const res = await axios.put('/api/updateItem', updatedItem);
      fetchItems();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Card>
      <h1>{pname}</h1>
      <h3>Rs.{pprice}</h3>
      <Icons>
        <BiSolidEditAlt
          style={{ cursor: 'pointer' }}
          onClick={handleEditClick}
        />
        <RiDeleteBin6Line style={{ cursor: 'pointer' }} />
      </Icons>
      {isModalOpen && (
        <ModalBackground>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}><AiFillCloseCircle/></CloseButton>
            {/* Add your modal content here */}
            <h2>Edit Item</h2>
            <form onSubmit={handleEdit}>
              <input
                type="text"
                placeholder="New Product Name"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <input
                type="text"
                placeholder="New Product Price"
                value={editedPrice}
                onChange={(e) => setEditedPrice(e.target.value)}
              />
              <button type="submit">Save Changes</button>
            </form>
          </ModalContent>
        </ModalBackground>
      )}
    </Card>
  );
};
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

const Icons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
  position: relative;
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    outline: none;
  }
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export default ItemCard;
