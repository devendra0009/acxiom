import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import UserComponent from "../components/user/UserComponent";
import AdminComponent from "../components/admin/AdminComponent";
import VendorComponent from "../components/vendor/VendorComponent";
import MainLayout from "../layout/MainLayout";


const Index = () => {
  const [pageType, setPageType] = useState();
  useEffect(() => {
    const pgTyp = JSON.parse(localStorage.getItem('user'))?.role;
    console.log(pgTyp);
    if (pgTyp === 'user') setPageType('user');
    else if (pgTyp === 'admin') setPageType('admin');
    else setPageType('vendor');
  },[pageType]);
  return (
    <MainLayout>
      {pageType === 'user' && <UserComponent />}
        {pageType === 'admin' && <AdminComponent />}
        {pageType === 'vendor' && <VendorComponent />}
    </MainLayout>
  );
};

const Container = styled.div`
  min-height: 90vh;
  background-color: aquamarine;
`;

export default Index;
