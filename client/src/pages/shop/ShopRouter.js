import React from 'react'
import {
    Route,
    Routes,
} from "react-router-dom";
import MyShop from './MyShop';
import ShopLayout from '../../layouts/ShopLayout';
import CreateShop from './CreateShop';
function ShopRouter() {
    return (
        <Routes>
            <Route path="/" element={<ShopLayout />} >
                <Route index element={<MyShop />} />
                <Route path="profile" element={<MyShop />} />
                <Route path="products" element={<MyShop />} />
            </Route>
            <Route path='/create-shop' element={<CreateShop />} />
        </Routes>
    )
}

export default ShopRouter