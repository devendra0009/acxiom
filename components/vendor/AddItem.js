import styled from '@emotion/styled';
import React, { useContext, useState } from 'react';
import { MyContext } from '../../utils/myContext';
import axios from 'axios';
// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: 'dap8lkkgr',
//   api_key: '186324916488615',
//   api_secret: 'd-JYnEvZwzHZF-0aQ2lVeAnTtn0',
// });
const AddItem = () => {
  // const { user, setUser } = useContext(MyContext);
  const [pname, setPname] = useState('');
  const [pprice, setPprice] = useState('');
  const [pimg, setPimg] = useState('');
  const handleImageChange = (e) => {
    // const file = e.target.files[0];
    // setPimg(file);
    // const reader=new FileReader()
    // reader.onload=function(onLoadEvent){
    //     setPimg(onLoadEvent.target.result)
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (onLoadEvent) {
        setPimg(onLoadEvent.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const uploadResponse = await cloudinary.v2.uploader.upload(pimg, {
    //   upload_preset: 'my_upload_preset',
    // });

    // const imageUrl = uploadResponse.secure_url;
const user=JSON.parse(localStorage.getItem('user'))
    const formData = {
      pname,
      pprice,
      vendorId: user?._id,
    //   pimg: imageUrl,
    };
    console.log(formData);
    try {
        const response = await axios.post('/api/addItem', formData);
        console.log(response);
        alert(response.data.msg);
    } catch (error) {
        console.log('Error :', error.response.data.msg);
        alert(error.response.data.msg);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Add a Item</h1>
        <Input
          type="text"
          placeholder="Product Name"
          value={pname}
          onChange={(e) => setPname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Product Price"
          value={pprice}
          onChange={(e) => setPprice(e.target.value)}
        />
        {/* <Input type="file" accept="image/*" onChange={handleImageChange} /> */}
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};
const Container = styled.div`
  /* height: 90vh; */
  width: 90%;
  margin: 0 auto;
  /* background-color: lightblue; */
  `;

const Form = styled.form`
border-radius: 10px;
  text-align: center;
  width: 50%;
  /* height: 40%; */
  padding: 2rem 0;
  margin: 2rem auto;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Input = styled.input`
  padding: 0.7rem 0.5rem;
  width: 50%;
  margin: 0 auto;
`;
const Button = styled.button`
  width: 30%;
  margin: auto;

  padding: 0.5rem 0.3rem;
`;
export default AddItem;
