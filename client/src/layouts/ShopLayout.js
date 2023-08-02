import React from 'react'
import { Outlet } from "react-router-dom";
import { Box } from '@mui/material';
import ShopDrawer from '../components/navigation/ShopDrawer';

function ShopLayout() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <ShopDrawer />
      <Outlet />
    </Box>
    </>
  )
}

export default ShopLayout;