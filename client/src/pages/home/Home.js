import React from 'react'
import { Box, Container } from '@mui/joy';
import ProductCard from '../product/ProductCard';

function Home() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('api/v1/product/getall')
      .then((response) => response.json())
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error))
  }, []);

  return (
    <Container>
      {products.length > 0 &&
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 3 }}>
          {products.map((product, index) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })}
        </Box>
      }
    </Container>
  )
}

export default Home