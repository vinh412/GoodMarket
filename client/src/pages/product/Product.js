import { Box, Button, Card, Container, Divider, Grid, Input, Radio, RadioGroup, Sheet, Typography } from '@mui/joy'
import React from 'react'
import ImagePreview from '../../components/imagepreview/ImagePreview'
import InfoShopCard from '../shop/InfoShopCard'
import { Rating } from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { useLocation } from 'react-router-dom';
import { numberWithDot } from '../../ultis';

function Product() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = React.useState(null);
    const [images, setImages] = React.useState([]);
    const [selectedModel, setSelectedModel] = React.useState({});
    const [price, setPrice] = React.useState("");
    const [quantity, setQuantity] = React.useState("");

    const onBuyClick = () => {
        if (product.models && product.models.length > 0) {

        } else {

        }
    }

    const handleRadioClick = (event, tier) => {
        const updateModel = { ...selectedModel };
        updateModel[tier.name] = event.target.value;
        setSelectedModel(updateModel);
        if(Object.keys(updateModel).length === product.tier_variations.length) {
            let modelName = "";
            if(product.tier_variations.length === 1){
                modelName = updateModel[tier.name];
                
            }else if(product.tier_variations.length === 2){
                modelName = updateModel[product.tier_variations[0].name] + ', ' + updateModel[product.tier_variations[1].name];
            }
            product.models.forEach(element => {
                if(modelName === element.name){
                    setPrice(numberWithDot(element.price)+'đ');
                    setQuantity(element.quantity);
                }
            });

        }
    }

    React.useEffect(() => {
        fetch(`http://localhost:3000/api/v1/product`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProduct(data);
                if (data.models && data.models.length > 0) {
                    setPrice(`${numberWithDot(data.minPrice)}đ - ${numberWithDot(data.maxPrice)}đ`);
                    setQuantity(`${data.quantity}`);
                }
                let imgArr = data.images.map(image => {
                    return { src: `${process.env.REACT_APP_IMAGE_URL}product/${image.fileName}` }
                });
                setImages(imgArr);
                return data;
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <React.Fragment>
            {!product ?
                <div>loading</div>
                :
                <Container>
                    <Card sx={{ mt: 3 }}>

                        <Grid container spacing={5}>
                            <Grid xs={5}>
                                {images.length > 0 && <ImagePreview images={images} />}
                            </Grid>
                            <Grid xs={7} display="flex" flexDirection="column" justifyContent="space-between">
                                <Box display="flex" flexDirection="column" gap={3}>
                                    <Typography level='h3'>{product.name}</Typography>
                                    <Box display="flex" gap={3}>
                                        <Typography endDecorator={<Rating value={4} readOnly />}>4.9</Typography>
                                        <Divider orientation='vertical' />
                                        <Typography>2,1k Đánh giá</Typography>
                                        <Divider orientation='vertical' />
                                        <Typography>8,4k Đã bán</Typography>
                                    </Box>
                                    <Typography level='h2' color='danger'>{price}</Typography>
                                    <Grid columns={15} container spacing={2}>
                                        {product.tier_variations.map((tier) => {
                                            return (
                                                <React.Fragment key={tier.name}>
                                                    <Grid xs={3}>
                                                        <Typography>{tier.name}</Typography>
                                                    </Grid>
                                                    <Grid xs={12}>
                                                        <RadioGroup
                                                            orientation="horizontal"
                                                            aria-labelledby="segmented-controls-example"
                                                            name="justify"
                                                            onChange={event => handleRadioClick(event, tier)}
                                                            sx={{ gap: 1 }}
                                                        >
                                                            {tier.options.map((item) => (
                                                                <Sheet
                                                                    key={item.name}
                                                                    sx={{
                                                                        p: 1,
                                                                        borderRadius: 'md',
                                                                        boxShadow: 'sm',
                                                                    }}
                                                                >
                                                                    <Radio
                                                                        color="neutral"
                                                                        value={item.name}
                                                                        disableIcon
                                                                        label={item.name}
                                                                        overlay
                                                                        slotProps={{
                                                                            label: ({ checked }) => ({
                                                                                sx: {
                                                                                    fontWeight: 'lg',
                                                                                    fontSize: 'md',
                                                                                    color: checked ? 'text.primary' : 'text.secondary',
                                                                                },
                                                                            }),
                                                                            action: ({ checked }) => ({
                                                                                sx: (theme) => ({
                                                                                    ...(checked && {
                                                                                        '--variant-borderWidth': '2px',
                                                                                        '&&': {
                                                                                            // && to increase the specificity to win the base :hover styles
                                                                                            borderColor: theme.vars.palette.primary[500],
                                                                                        },
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }}
                                                                    />
                                                                </Sheet>
                                                            ))}
                                                        </RadioGroup>
                                                    </Grid>
                                                </React.Fragment>
                                            )
                                        })}

                                        <Grid xs={3}>
                                            <Typography>Số lượng</Typography>
                                        </Grid>
                                        <Grid xs={12}>
                                            <Box display="flex" gap={2}>
                                                <Input type='number' defaultValue={1} sx={{ width: "5rem" }} slotProps={{ input: { min: 1 } }} />
                                                <Typography color='neutral'>{`${quantity} sản phẩm có sẵn`}</Typography>
                                            </Box>
                                            { }
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

                    <InfoShopCard shop={product.shop} />

                    <Card sx={{ mt: 3 }}>
                        <Typography level='h3'>Mô tả sản phẩm</Typography>
                        <Typography sx={{ whiteSpace: "pre-wrap", lineHeight: 1.2 }}>{product.description}</Typography>
                    </Card>

                    <Card sx={{ mt: 3 }}>
                        <Typography level='h3'>Đánh giá sản phẩm</Typography>
                    </Card>
                </Container>
            }
        </React.Fragment>
    )
}

export default Product