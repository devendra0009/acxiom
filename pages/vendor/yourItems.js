import React from 'react';
import MainLayout from '../../layout/MainLayout';
import VendorNav from '../../components/vendor/VendorNav';
import YourItems from '../../components/vendor/YourItems';

const yourItems = () => {
  return (
    <MainLayout>
      <VendorNav />
      <YourItems />
    </MainLayout>
  );
};

export default yourItems;
