import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Product from './components/product/Product'
import Addtocart from './pages/AddToCart/Addtocart'
import Home from './pages/home/Home'
import Order from './pages/Order/Order'
import ShippingInfo from './pages/shippingDetailsPage/ShippingInfo'
import Payment from './pages/Payment/Payment'
import ProductPage from './pages/productDetails/ProductPage'
import ShippingAddress from './pages/OrderShippingAddress/ShippingAddress'
import Profile from './pages/account/Profile'
import UpdatePassword from './pages/UpdatePassword/UpdatePassword'
import UpdateProfile from './pages/UpdateProfile/UpdateProfile'
import Login from './pages/LoginReg/Login'
import Register from './pages/LoginReg/Register'
import Tostify from './components/Tostify/Tostify'
import AllproductsPage from './pages/AllProducts/AllproductsPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/tos" element={<Tostify />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllproductsPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Addtocart />} />
        <Route path="/shippingaddress" element={<ShippingAddress />} />
        <Route path="/shippingdetails" element={<ShippingInfo />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
      </Routes>
    </>
  )
}

export default App