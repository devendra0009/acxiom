import React from 'react';
import MainLayout from '../../layout/MainLayout';
import UserNav from '../../components/user/UserNav';
import MyCart from '../../components/user/MyCart';

const myCart = () => {
  return (
    <MainLayout>
      <UserNav />
      <MyCart />
    </MainLayout>
  );
};

export default myCart;
