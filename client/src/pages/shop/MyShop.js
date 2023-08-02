import React from 'react'
import CreateShop from './CreateShop'
import InfoShopCard from './InfoShopCard';
import { Box, Container } from '@mui/joy';
import ShopProfile from './ShopProfile';
import ProductCard from '../product/ProductCard';


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
      <Box sx={{ flexGrow: 1 }}>
        {loading ? (
          <div>loading please wait</div>
        ) : (
          <div>
            {shop ? (
              <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <InfoShopCard shop={shop}/>
                  <ShopProfile shop={shop}/>
                  <ProductCard />
                </Box>
              </Container>
            ) : (
              <CreateShop />
            )
            }
          </div>
        )
        }
      </Box>
  )
}

export default MyShop