import { Card, Typography, Box, Grid, Input, Button } from '@mui/joy'
import React from 'react'
import { Avatar } from '@mui/material'

function ShopProfile({ shop }) {
    const [backgroundSelectedImage, setBackgroundSelectedImage] = React.useState(null);
    const [avatarSelectedImage, setAvatarSelectedImage] = React.useState(null);

    // This function will be triggered when the file field change
    const backgroundImageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setBackgroundSelectedImage(e.target.files[0]);
        }
    };

    const avatarImageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setAvatarSelectedImage(e.target.files[0]);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create an object of formData
        const formData = new FormData();

        const formElements = event.currentTarget.elements;
        console.log(formElements.displayname.value);

        // Update the formData object
        formData.append(
            "avatar",
            avatarSelectedImage,
        );
        formData.append(
            "background",
            backgroundSelectedImage,
        );
        formData.append(
            "displayName",
            formElements.displayname.value
        )

        fetch('api/v1/shop/updateProfile', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('File upload failed');
                }
            })
            .then(data => {
                console.log('Server response:', data);
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });

    }
    return (
        <Card sx={{ p: 4 }}>
            <Typography level='h3'>Hồ Sơ Shop</Typography>
            <Typography level='p'>Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn</Typography>
            <Box component="form" onSubmit={handleSubmit} encType='multipart/form-data' sx={{ mt: 3 }}>
                <Grid container rowSpacing={4} columnSpacing={5}>
                    <Grid xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                        <Typography>Tên hiển thị</Typography>
                    </Grid>
                    <Grid xs={10}>
                        <Input type='text' name='displayname' value={shop.displayName} required />
                    </Grid>
                    <Grid xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                        <Typography>Shop Avatar</Typography>
                    </Grid>
                    <Grid xs={10}>
                        <label htmlFor="avatar">
                            <Avatar sx={{ width: '5rem', height: '5rem' }} src={(avatarSelectedImage && URL.createObjectURL(avatarSelectedImage)) || `${process.env.REACT_APP_IMAGE_URL}${shop.avatar}`}></Avatar>
                        </label>
                        <input
                            accept='image/*'
                            type="file"
                            id="avatar"
                            name='avatar'
                            style={{ display: "none" }}
                            onChange={avatarImageChange}
                        />
                    </Grid>
                    <Grid xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                        <Typography>Shop Background</Typography>
                    </Grid>
                    <Grid xs={10}>
                        <input
                            accept='image/*'
                            type="file"
                            id="background"
                            name='background'
                            onChange={backgroundImageChange}
                        />
                        <div>
                            <img
                                src={(backgroundSelectedImage && URL.createObjectURL(backgroundSelectedImage)) || `${process.env.REACT_APP_IMAGE_URL}${shop.background}`}
                                alt="Thumb"
                                style={{ height: '5rem', width: '10rem', objectFit: 'cover' }}
                            />
                        </div>
                    </Grid>
                </Grid>
                <Button type='submit'>Xác nhận</Button>
            </Box>
        </Card>
    )
}

export default ShopProfile