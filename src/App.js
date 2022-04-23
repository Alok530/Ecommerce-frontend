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

function App() {
  return (
    <>
      <Routes>
        <Route path="/shop" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Addtocart />} />
        <Route path="/shippingaddress" element={<ShippingAddress />} />
        <Route path="/shippingdetails" element={<ShippingInfo />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/account" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App