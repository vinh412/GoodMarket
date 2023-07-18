import React from 'react'
import CreateShop from './CreateShop'
import InfoShopCard from './InfoShopCard';
import { Box, Container, Grid, Typography } from '@mui/joy';


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
    <div>
      {loading ? (
        <div>loading please wait</div>
      ) : (
        <div>
          {shop ? (
            <Box sx={{p: 3, backgroundColor: '#fff'}}>
              <InfoShopCard/>
            </Box>
          ) : (
            <CreateShop />
          )
          }
        </div>
      )
      }
    </div>
  )
}

export default MyShop