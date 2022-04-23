import React from 'react'
import './productDetail.css'
import ProductDetail from '../../components/productdetail/ProductDetails'
import RelatedProduct from '../../components/RelatedProduct/RelatedProduct'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Bottom from '../../components/Bottom/Bottom'
import Cateorgry from '../../components/navbarmenu/Cateorgry'

function ProductPage() {
    return (
        <div>
            <Navbar/>
            <div className='container py-4'>
                <div className="row mb-4">
                    <ProductDetail />
                </div>
                <h2>Related Products</h2>
                <div className="row relatedProductDiv">
                    <RelatedProduct />
                    <RelatedProduct />
                    <RelatedProduct />
                    <RelatedProduct />
                </div>
            </div>
            <Footer/>
            <Bottom/>
        </div>
    )
}

export default ProductPage