import React from 'react'
import CreateShop from './CreateShop'
import InfoShopCard from './InfoShopCard';
import { Box, Container, Grid, Typography } from '@mui/joy';
import ShopDrawer from '../../components/navigation/ShopDrawer';
import { Toolbar } from '@mui/material';


function MyShop() {
  const [loading, setLoading] = React.useState(true);
  const [shop, setShop] = React.useState();

  React.useEffect(() => {
    fetch('api/v1/shop')
      .then((response) => response.json())
      .then((response) => setShop(response.shop))
      .then(() => setLoading(false))
  }, []);

  return (
    <Box sx={{display: 'flex'}}>
      <ShopDrawer />
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar />
        {loading ? (
          <div>loading please wait</div>
        ) : (
          <div>
            {shop ? (
              <Container>
                <InfoShopCard />
              </Container>
            ) : (
              <CreateShop />
            )
            }
          </div>
        )
        }
      </Box>

    </Box>
  )
}

export default MyShop