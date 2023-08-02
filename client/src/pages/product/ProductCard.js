import React from 'react'
import { AspectRatio, Card, CardContent, CardOverflow, Typography } from '@mui/joy'
import { Rating } from '@mui/material'

function ProductCard() {
  return (
    <Card variant='outlined' sx={{width: "160px"}}>
        <CardOverflow>
            <AspectRatio ratio={1}>
                <img src='https://gaubongquatang.com/img/product/image/263/goi%20om%20lena.jpg' alt='' />
            </AspectRatio>
        </CardOverflow>
        <CardContent sx={{height: "80px"}}>
            <Typography  level='body1' sx={{'overflow': 'hidden', 'text-overflow': 'ellipsis', 'display': '-webkit-box', '-webkit-line-clamp': '2', '-webkit-box-orient': 'vertical'}}>Tik Tok Lena Teddy Bear Đồ chơi búp bê sang trọng Mũ có thể tháo rời Búp bê sang trọng Gấu Lena Quà tặng trẻ em Bé gái Gối búp bê</Typography>
            <Typography level='h6'component="p" color='danger'>20.000</Typography>
            <Typography level='body3' startDecorator={<Rating name="read-only" value={4} readOnly size='small'/>}>Đã bán 100</Typography>
        </CardContent>
    </Card>
  )
}

export default ProductCard