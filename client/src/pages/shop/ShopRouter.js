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
            <Route element={<ShopLayout />} >
                <Route index element={<MyShop />} />
                <Route path="/shop/profile" element={<h1>Profile</h1>} />
                <Route path="/shop/products" element={<h1>Products</h1>} />
            </Route>
            <Route path='/create-shop' element={<CreateShop />} />
        </Routes>
    )
}

export default ShopRouter