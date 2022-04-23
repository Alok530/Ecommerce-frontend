import React from 'react'
import './home.css'
import Footer from '../../components/footer/Footer'
import Cateorgry from '../../components/navbarmenu/Cateorgry'
import Navbar from '../../components/navbar/Navbar'
import Product from '../../components/product/Product'
import Bottom from '../../components/Bottom/Bottom'

function Home() {
  return (
    <>
      <Navbar />
      <Cateorgry/>
      <div className='container my-4 py-4'>
        <h2 className='text-center'>Featured Products</h2>
        <hr className='mb-4 featuredHr'/>
        <div className='row'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <Footer />
      <Bottom/>
    </>
  )
}

export default Home