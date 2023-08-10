import React from 'react'
import BasicInfo from '../../components/products/BasicInfo'
import SaleInfo from '../../components/products/SaleInfo'
import { Box, Button } from '@mui/joy'

function AddProduct() {
    return (
        <div>
            <form>
                <BasicInfo />
                <SaleInfo />
                <Box sx={{display: "flex", my: 3, justifyContent: "end", gap: "8px"}}>
                    <Button variant='solid' color='neutral'>Hủy</Button>
                    <Button type='submit'>Xác nhận</Button>
                </Box>
            </form>
        </div>
    )
}

export default AddProduct