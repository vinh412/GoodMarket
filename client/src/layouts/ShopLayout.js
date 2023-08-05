import React from 'react'
import { Outlet } from "react-router-dom";
import { Box } from '@mui/material';
import ShopDrawer from '../components/navigation/ShopDrawer';
import { Container } from '@mui/joy';

function ShopLayout() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <ShopDrawer />
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  )
}

export default ShopLayout;