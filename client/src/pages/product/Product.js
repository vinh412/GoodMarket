import { Box, Button, Card, Container, Divider, Grid, Input, Typography } from '@mui/joy'
import React from 'react'
import ImagePreview from '../../components/imagepreview/ImagePreview'
import InfoShopCard from '../shop/InfoShopCard'
import { Rating } from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

const images = [
    { src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOHK3kWuDkGRSDquOBjdrRMsUAV4UNaXhXTyqoS0rM4Xdldf7w" },
    { src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZ4-SxYRzGjpWExp-_BZy3wTpZITa-TN8NM2vvKW_ByRF_1C_0" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOaM77ZwuufCkF4jetO7MxunfxMPs3y3EkQSRE9HM_0YyqNYl" },
    { src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJd-XBEGFgG1xhhKGNhHD_hFi5ad1vJeDBX3NYLf6NOn8iRZYx" },
    { src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxy01QfkdAoAdJhDugyG74au6_Lnuen_uldKRn-lN7zCzDbdB4" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsIUNZns4O6VEhXxVqeya_tOIJcCquLz8N2o6udCBSEW1IelL" },
    { src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHHqzYZxfwX2im3bFZTC2o0aKHn11LioPK8jlVgh6HTYBokIlz" },
    { src: "https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0" },
];

const text = `✔️ Tên sản phẩm: Gấu Bông Mèo Hoàng Thượng Cosplay
✔️ Màu sắc: nhiều màu
✔️ Kích Thước: 22 cm - 25 cm - 40 cm - 50 cm
✔️ Cân Nặng: 
✔️ Xuất xứ: Việt Nam
✔️ Chất liệu vải lông cao cấp
✔️ Ruột nhồi 100% bông gòn trắng
✔️ Ảnh Thật Độc Quyền Shop Tự Chụp 
✔️ An toàn cho sức khỏe người dùng, vải mềm mịn tạo cảm giác thoải mái khi ôm.
✔️ Là món quà ý nghĩa dành tặng người thương
✔️ Shop luôn khẳng định 100% sản phẩm đến tay người tiêu dùng giống hệt hình ảnh và video mô tả sản phẩm.

Xưởng sản xuất thú nhồi bông Gấu Bông City lớn nhất miền Bắc nhận may thú nhồi bông số lượng lớn theo yêu cầu.
Cam kết vải và bông đều là hàng loại 1
Tuyển sỉ và CTV toàn quốc, chiết khấu cực cao, zalo 09669.23993. Hàng luôn có sẵn đầy kho, đặt là ship ngay!
Hotline: 09669.23993
Fanpage: https://www.face book.com/gaubongcity/
Hệ thống kho xưởng và cửa hàng bán & giới thiệu sản phẩm:
➥ Store 1: 346 Trương Định – Hoàng Mai – Hà Nội
➥ Store 2: 44 Tây Sơn - Đống Đa – Hà Nội
➥ Store 4: 171 Đại La – Hà Nội
➥ Store 5: 42 Lê Lai – Lê Lợi – TP Hưng Yên
➥ Store 6: 275 Nguyễn Lương Bằng – Kim Động – Hưng Yên
➥ Store 7: 68 Lê Hồng Phong – Ngô Quyền - Hải Phòng
===========================

#gấu-bông #gấu-bông-đẹp #gấu-bông-cao-cấp #shop-gấu-bông #heo-bông #meo #hoang #thuong #gau #thu #goi #nhoi #bong #gon #om #mem #min #em #qua #tang #dochoi #be #tre #thú-nhồi-bông`

function Product() {
    return (
        <Container>
            <Card sx={{ mt: 3 }}>

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

            <InfoShopCard />

            <Card sx={{ mt: 3 }}>
                <Typography level='h3'>Mô tả sản phẩm</Typography>
                <Typography sx={{whiteSpace: "pre-wrap"}}>{text}</Typography>
            </Card>

            <Card sx={{ mt: 3}}>
                <Typography level='h3'>Đánh giá sản phẩm</Typography>
            </Card>
        </Container>
    )
}

export default Product