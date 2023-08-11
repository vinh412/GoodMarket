import React from 'react'
import { AspectRatio, Card, CardContent, CardOverflow, Typography } from '@mui/joy'
import { Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { numberWithDot } from '../../ultis'

function ProductCard({product}) {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/product/${product.id}`)} variant='outlined' sx={{width: "160px", cursor: "pointer"}}>
        <CardOverflow>
            <AspectRatio ratio={1}>
                <img src={`${process.env.REACT_APP_IMAGE_URL}product/${product.images[0].fileName}`} alt='' />
            </AspectRatio>
        </CardOverflow>
        <CardContent sx={{height: "80px"}}>
            <Typography level='body1' sx={{'overflow': 'hidden', 'text-overflow': 'ellipsis', 'display': '-webkit-box', '-webkit-line-clamp': '2', '-webkit-box-orient': 'vertical'}}>{product.name}</Typography>
            <Typography level='h6'component="p" color='danger'>{numberWithDot(product.minPrice)}đ</Typography>
            <Typography level='body3' startDecorator={<Rating name="read-only" value={4} readOnly size='small'/>}>Đã bán 100</Typography>
        </CardContent>
    </Card>
  )
}

export default ProductCard