import React from 'react'
import { CssVarsProvider } from "@mui/joy/styles";
import customTheme from '../../theme/theme'
import { Box, Container, Card, Typography, FormControl, FormLabel, Grid, Input, Button } from '@mui/joy'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
function CreateShop() {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [error, setError] = React.useState();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formElements = event.currentTarget.elements;
        const formData = {
            name: formElements.name.value,
            displayName: formElements.displayName.value,
        };

        try{
            const res = await fetch("api/v1/shop/createShop", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if(data.error){
                setError(data.error);
            }else{
                navigate(0);
            }

        }catch(err){
            console.log(err);
        }
    }
    return (
        <CssVarsProvider theme={customTheme}>
            <Container maxWidth="lg">
                <Box sx={{
                    marginTop: 4,
                }}>
                    <Card variant="outlined" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography level='h3'>Chào mừng đến với GoodMarket</Typography>
                        <Typography level='p'>Để đăng ký bán hàng trên GoodMarket, bạn cần cung cấp một số thông tin cơ bản.</Typography>
                        <Box component='form' onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid xs={12}>
                                    <FormControl required>
                                        <FormLabel>Tên Shop</FormLabel>
                                        <Input type="text" name="name" />
                                    </FormControl>
                                </Grid>
                                <Grid xs={12}>
                                    <FormControl required>
                                        <FormLabel>Tên hiển thị</FormLabel>
                                        <Input type="text" name="displayName"></Input>
                                    </FormControl>
                                </Grid>
                                <Grid xs={12}>
                                    <FormControl required>
                                        <FormLabel>Email</FormLabel>
                                        <Input type="email" name="email" value={user.email} disabled />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            {error && <Typography variant="plain" color='danger' sx={{mt:3}}>{`*${error}`}</Typography>}
                            <Button type="submit" variant="solid" sx={{ my: 3 }}>Register</Button>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </CssVarsProvider>
    )
}

export default CreateShop