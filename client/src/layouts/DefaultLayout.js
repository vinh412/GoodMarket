import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/navigation/Header'
import { Toolbar } from '@mui/material';

function DefaultLayout() {
  return (
    <>
      <Header />
      <Toolbar />
      <Outlet />
    </>
  )
}

export default DefaultLayout