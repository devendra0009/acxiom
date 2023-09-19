import React from 'react'
import MainLayout from '../../layout/MainLayout'
import UserNav from '../../components/user/UserNav'
import AllVendors from '../../components/user/AllVendors'

const allVendors = () => {
  return (
    <MainLayout>
    <UserNav/>
    <AllVendors/>
    </MainLayout>
  )
}
export default allVendors