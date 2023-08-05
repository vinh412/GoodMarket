import { Card, Grid, Input, Typography } from '@mui/joy'
import React from 'react'

function SaleInfo() {
  return (
    <Card sx={{mt: 3}}>
        <Typography level='h3'>Thông tin bán hàng</Typography>
        <Grid container rowSpacing={3} sx={{p: 3}}>
          <Grid xs={2}>
            <Typography>Giá</Typography>
          </Grid>
          <Grid xs={10}>
            <Input type='text' />
          </Grid>
          <Grid xs={2}>
            <Typography>Số lượng</Typography>
          </Grid>
          <Grid xs={10}>
            <Input type='number' />
          </Grid>
        </Grid>
    </Card>
  )
}

export default SaleInfo