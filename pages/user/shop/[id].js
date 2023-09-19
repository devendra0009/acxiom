// pages/[productId].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserNav from '../../../components/user/UserNav';
import MainLayout from '../../../layout/MainLayout';
import VendorDetails from '../../../components/user/VendorDetails';
import axios from 'axios';

const ProductDetail = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  //   console.log(router.query);
  const { id } = router.query;
  const fetchItems = async () => {
    try {
        console.log(id);
      const res = await axios.get(`/api/getItems?vendorId=${id}`);
      console.log(res.data.vendor);
      setItems(res.data.vendor.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <MainLayout>
      <UserNav />
      <VendorDetails items={items}/>
    </MainLayout>
  );
};

export default ProductDetail;
