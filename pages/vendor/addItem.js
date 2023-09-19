import React from 'react';
import MainLayout from '../../layout/MainLayout';
import VendorNav from '../../components/vendor/VendorNav';
import AddItem from '../../components/vendor/AddItem';

const addItem = () => {
  return (
    <MainLayout>
      <VendorNav />
      <AddItem />
    </MainLayout>
  );
};

export default addItem;
