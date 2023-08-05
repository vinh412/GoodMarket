import { Box, Button, Card, Container, Divider, Grid, Input, Typography } from '@mui/joy'
import React from 'react'
import ImagePreview from '../../components/imagepreview/ImagePreview'
import { Rating } from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

const images = [{ src: "https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0" },
{ src: "https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0" },
{ src: "https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0" },
{ src: "https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0" },
{ src: "https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0" },
{ src: "https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0" },
{ src: "https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0" },
{ src: "https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0" },
];

function Product() {
    return (
        <Container>
            <Card>

                <Grid container spacing={5}>
                    <Grid xs={5}>
                        <ImagePreview images={images} />
                    </Grid>
                    <Grid xs={7} display="flex" flexDirection="column" justifyContent="space-between">
                        <Box display="flex" flexDirection="column" gap={3}>
                            <Typography level='h3'>Gấu Bông Mèo Hoàng Thượng Cosplay 3 Màu - Mèo Bông Cao Cấp Gấu Bông City</Typography>
                            <Box display="flex" gap={3}>
                                <Typography endDecorator={<Rating value={4} readOnly />}>4.9</Typography>
                                <Divider orientation='vertical' />
                                <Typography>2,1k Đánh giá</Typography>
                                <Divider orientation='vertical' />
                                <Typography>8,4k Đã bán</Typography>
                            </Box>
                            <Typography level='h2' color='danger'>58.000 - 290.000</Typography>
                            <Grid columns={15} container spacing={2}>
                                <Grid xs={3}>
                                    <Typography>Kiểu</Typography>
                                </Grid>
                                <Grid xs={12}>
                                    <Box display="flex" gap={2}>
                                        <Button variant='outlined'>Cosplay Gấu Trúc Pro</Button>
                                        <Button variant='outlined'>Cosplay Thỏ</Button>
                                        <Button variant='outlined'>Cosplay Ếch</Button>
                                    </Box>
                                </Grid>
                                <Grid xs={3}>
                                    <Typography>Size</Typography>
                                </Grid>
                                <Grid xs={12}>
                                    <Box display="flex" gap={2}>
                                        <Button variant='outlined'>20cm</Button>
                                        <Button variant='outlined'>25cm</Button>
                                        <Button variant='outlined'>40cm</Button>
                                        <Button variant='outlined'>50cm</Button>
                                    </Box>
                                </Grid>
                                <Grid xs={3}>
                                    <Typography>Số lượng</Typography>
                                </Grid>
                                <Grid xs={12}>
                                    <Box display="flex" gap={2}>
                                        <Input type='number' defaultValue={1} sx={{ width: "5rem" }} slotProps={{ input: { min: 1 } }} />
                                        <Typography color='neutral'>354 sản phẩm có sẵn</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box display="flex" gap={2} alignItems="flex-end">
                            <Button variant='outlined' size='lg' startDecorator={<AddShoppingCartRoundedIcon />}>Thêm vào giỏ hàng</Button>
                            <Button size='lg'>Mua ngay</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default Product