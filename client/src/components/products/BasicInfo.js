import React from 'react'
import { Badge, Card, CardCover, ChipDelete, Grid, IconButton, Input, Textarea, Typography } from '@mui/joy'
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';

function BasicInfo() {
  const [selectedImage, setSelectedImage] = React.useState([]);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage([...selectedImage, ...Object.values(e.target.files)]);
    }
  }

  return (
    <Card sx={{ mt: 3 }}>
      <Typography level='h3'>Thông tin cơ bản</Typography>
      <Grid container rowSpacing={3} sx={{ p: 3 }}>
        <Grid xs={2}>
          <Typography>Hình ảnh sản phẩm</Typography>
        </Grid>
        <Grid xs={10} sx={{ display: "flex", gap: "8px" }}>
          {Boolean(selectedImage.length) && selectedImage.map((image, i) =>
            <Badge
              key={i}
              sx={{ "--Badge-paddingX": 0, "--Badge-minHeight": 0, "--Badge-radius": "50%" }}
              badgeContent={
                <ChipDelete 
                  color='danger' 
                  sx={{ "--Chip-deleteSize": "1rem" }}
                  onDelete={() => {
                    console.log(i);
                    let imgArr = [...selectedImage];
                    imgArr.splice(i,1);
                    setSelectedImage(imgArr);
                  }}
                />
              }>
              <Card sx={{ width: "5rem", height: "5rem" }}>
                <CardCover>
                  <img src={URL.createObjectURL(image)} />
                </CardCover>
              </Card>
            </Badge>
          )}
          <IconButton component="label" htmlFor="product-img-input" variant='outlined' sx={{ "--IconButton-size": "112px" }}>
            <AddPhotoAlternateRoundedIcon fontSize='large' />
          </IconButton>
          <input
            accept='image/*'
            multiple
            type='file'
            id='product-img-input'
            style={{ display: "none" }}
            onChange={onImageChange}
          />
        </Grid>
        <Grid xs={2}>
          <Typography>Tên sản phẩm</Typography>
        </Grid>
        <Grid xs={10}>
          <Input type='text' />
        </Grid>
        <Grid xs={2}>
          <Typography sx={{ alignItems: "start", pt: 1 }}>Mô tả sản phẩm</Typography>
        </Grid>
        <Grid xs={10}>
          <Textarea minRows={5} variant='soft' />
        </Grid>
      </Grid>

    </Card>
  )
}

export default BasicInfo