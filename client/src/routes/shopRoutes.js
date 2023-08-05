import ShopLayout from "../layouts/ShopLayout";
import CreateShop from "../pages/shop/CreateShop";
import ShopProfile from "../pages/shop/ShopProfile";

const shopRoutes = [
    { path: '/shop/profile', component: {ShopProfile}, layout: ShopLayout},
    { path: '/shop/products', component: {ShopProfile}, layout: ShopLayout},
    { path: '/shop/create-shop', component: {CreateShop}},
]

export default shopRoutes;