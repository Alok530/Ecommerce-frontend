import React from 'react'
import './allproducts.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Fproduct from '../../components/FeaturedProduct/Fproduct'
import { useState } from 'react'
import Item from '../../components/ProductItem/Item'

function AllproductsPage() {
    const [inputval, setinputval] = useState(1)
    return (
        <>
            <Navbar />
            <div className="allproductPage">
                <div className="fillter">
                    <div className="fillterDiv">
                        <h5>Categories</h5>
                        <ul style={{ 'listStyle': 'none', 'paddingLeft': '10px' }}>
                            <li>Laptop</li>
                            <li>Mobile</li>
                            <li>Footwear</li>
                            <li>Cloths</li>
                            <li>T-shirt</li>
                            <li>Computers</li>
                            <li>Tablet</li>
                        </ul>
                        <h5 for="customRange3" class="form-label">Product Ratting</h5>
                        <input type="range" onChange={() => { setinputval(inputval) }} class="form-range" min="1" max="5" step="0.5" id="customRange3"></input>
                        <h5 for="customRange3" class="form-label">Products Price</h5>
                        <input type="range" onChange={() => { setinputval(inputval) }} class="form-range" min="1" max="5" step="0.5" id="customRange3" form-range-track-height={'1px'}></input>
                        <h1>{ }</h1>
                    </div>
                </div>
                <div className="products">
                    <h2 className='text-center mb-1'>Products</h2>
                    <div className="row d-flex justify-content-between">
                        <Item itemUrl={'/images/img12.jpg'} />
                        <Item itemUrl={'/images/iPhone12.webp'} />
                        <Item itemUrl={'/images/img2.jpg'} />
                        <Item itemUrl={'/images/img4.jpg'} />
                        <Item itemUrl={'/images/HpLaptop.webp'} />
                        <Item itemUrl={'/images/img3.jpg'} />
                        <Item itemUrl={'/images/CanonCamera.webp'} />
                        <Item itemUrl={'/images/img1.jpg'} />
                        <Item itemUrl={'/images/img5.jpg'} />
                        <Item itemUrl={'/images/MacBook.webp'} />
                        <Item itemUrl={'/images/img6.jpg'} />
                        <Item itemUrl={'/images/SonyLens.webp'} />
                        <Item itemUrl={'/images/img8.jpg'} />
                        <Item itemUrl={'/images/img7.jpg'} />
                        <Item itemUrl={'/images/laptop.webp'} />
                        <Item itemUrl={'/images/img11.jpg'} />
                        <Item itemUrl={'/images/SonyCamera.webp'} />
                        <Item itemUrl={'/images/img9.jpg'} />
                        <Item itemUrl={'/images/img10.jpg'} />
                        <Item itemUrl={'/images/lenvoLaptop.webp'} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllproductsPage