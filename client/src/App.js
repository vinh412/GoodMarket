import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import React from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import './App.css'
import DefaultLayout from "./layouts/DefaultLayout";
import SignUp from './pages/sign/SignUp';
import LogIn from './pages/sign/LogIn';
import Home from './pages/home/Home';
import ShopRouter from "./pages/shop/ShopRouter";
import ShopLayout from "./layouts/ShopLayout";
import MyShop from "./pages/shop/MyShop";
import ShopProfile from "./pages/shop/ShopProfile";
import ProductCard from "./pages/product/ProductCard";
import CreateShop from "./pages/shop/CreateShop";
import AllProducts from "./pages/product/AllProducts";
import AddProduct from "./pages/product/AddProduct";

function App() {
  const { user } = useAuthContext();
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <DefaultLayout />,
  //     children: [
  //       {
  //         path: "shop",
  //         element: <ShopLayout />,
  //         children: [
  //           {
  //             index: true,
  //             element: <MyShop />
  //           },
  //           {
  //             path: "profile",
  //             element: <ProductCard />
  //           }
  //         ]
  //       },
  //       {
  //         path: "/create-shop",
  //         element: <CreateShop />
  //       }
  //     ],
  //   },
  // ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<Home />} />
            <Route path="/blogs" element={user ? <h1>Blogs</h1> : <Navigate to="/login" />} />
            <Route path="/shop" element={user ? <ShopLayout /> : <Navigate to="/login" />}>
              <Route index element={<MyShop />} />
              <Route path="/shop/profile" element={<h1>Profile</h1>} />
              <Route path="/shop/product/all" element={<AllProducts />} />
              <Route path="/shop/product/add" element={<AddProduct />} />
            </Route>
            <Route path="/create-shop" element={ <CreateShop /> } />
          </Route>
          <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <LogIn /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
