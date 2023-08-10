import React from 'react'
import { Button, Card, Grid, Input, Typography } from '@mui/joy'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AddModel from './AddModel';
import ModelTable from './ModelTable';

function SaleInfo() {
  const initTierVariation = {
    id: 1,
    name: null,
    options: [
      {
        id: 1,
        name: null
      }
    ],
  };
  const [tierVariations, setTierVariations] = React.useState([]);
  return (
    <Card sx={{ mt: 3 }}>
      <Typography level='h3'>Thông tin bán hàng</Typography>
      <Grid container rowSpacing={3} sx={{ p: 3 }}>
        <Grid xs={2}>
          <Typography>Phân loại hàng</Typography>
        </Grid>
        <Grid xs={10}>
          {tierVariations.length > 0 ?
            <AddModel tierVariations={tierVariations} setTierVariations={setTierVariations} />
            :
            <Button startDecorator={<AddRoundedIcon />} variant='outlined' onClick={() => setTierVariations([initTierVariation])}>Thêm nhóm phân loại</Button>
          }
        </Grid>
        {tierVariations.length === 0 &&
          <>
            <Grid xs={2}>
              <Typography>Giá</Typography>
            </Grid>
            <Grid xs={10}>
              <Input type='text' required/>
            </Grid>
            <Grid xs={2}>
              <Typography>Số lượng</Typography>
            </Grid>
            <Grid xs={10}>
              <Input type='number' required/>
            </Grid>
          </>
        }
        {tierVariations.length > 0 &&
          <>
            <Grid xs={2}>
              <Typography>Danh sách phân loại</Typography>
            </Grid>
            <Grid xs={10}>
              <ModelTable tierVariations={tierVariations} />
            </Grid>
          </>
        }
      </Grid>
    </Card>
  )
}

export default SaleInfo