import React from 'react'
import { Avatar, Button, Card, CardContent, CardCover, Grid, Typography } from '@mui/joy'
import { CssVarsProvider } from '@mui/joy/styles';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import customTheme from '../../theme/theme'
function InfoShopCard({shop}) {
    return (
        <CssVarsProvider theme={customTheme}>
            <Card sx={{p: 4, mt: 3}}>

                <Grid container columnSpacing={10}>
                    <Grid xs={5}>
                        <Card>
                            <CardCover>
                                <img src={shop && `${process.env.REACT_APP_IMAGE_URL}${shop.background}`} alt='' style={{filter: "contrast(0.3)"}} />
                            </CardCover>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid xs={3}>
                                        <Avatar sx={{ width: '5rem', height: '5rem' }} src={shop && `${process.env.REACT_APP_IMAGE_URL}${shop.avatar}`}></Avatar>
                                    </Grid>
                                    <Grid xs={9}>
                                        <Typography level='h3' textColor={'common.white'}>{(shop && shop.displayName) || 'Gấu Bông Vân Anh' }</Typography>
                                        <Typography level='p' textColor={'common.white'}>Online 6 phút trước</Typography>
                                    </Grid>
                                    <Grid xs={6}>
                                        <Button fullWidth startDecorator={<AddBoxOutlinedIcon />}>Theo dõi</Button>
                                    </Grid>
                                    <Grid xs={6}>
                                        <Button fullWidth startDecorator={<ChatOutlinedIcon />}>Chat</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={3} container direction='column' justifyContent='space-around'>
                        <Typography startDecorator={<StorefrontOutlinedIcon />}>Sản phẩm: </Typography>
                        <Typography startDecorator={<PersonAddAltOutlinedIcon />}>Đang theo dõi: </Typography>
                        <Typography startDecorator={<ChatOutlinedIcon />}>Tỷ lệ phản hồi chat: </Typography>
                    </Grid>
                    <Grid xs={3} container direction='column' justifyContent='space-around'>
                        <Typography startDecorator={<PeopleAltOutlinedIcon />}>Người theo dõi: </Typography>
                        <Typography startDecorator={<StarBorderOutlinedIcon />}>Đánh giá: </Typography>
                        <Typography startDecorator={<HowToRegOutlinedIcon />}>Tham gia: </Typography>
                    </Grid>
                </Grid>
            </Card>

        </CssVarsProvider>
    )
}

export default InfoShopCard