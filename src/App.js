import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Skeleton from './components/Skeleton/Skeleton'
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
import Errorpage from './components/404page/Errorpage'
import AllOrder from './pages/Allorders/AllOrder'
import Trackorder from './pages/TrackOrder/Trackorder'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllproductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Addtocart />} />
        <Route path="/shippingaddress" element={<ShippingAddress />} />
        <Route path="/shippingdetails/:addressId" element={<ShippingInfo />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/skc" element={<Skeleton />} />
        <Route path="/myorder" element={<AllOrder />} />
        <Route path="/trackorder/:id" element={<Trackorder />} />
        <Route path="/error" element={<Errorpage/>} />
        <Route path="*" element={<Errorpage/>} />
      </Routes>
    </>
  )
}

export default App