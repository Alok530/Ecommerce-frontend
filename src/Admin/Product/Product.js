import React from 'react'
import Bottom from '../../components/Bottom/Bottom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './Product.css';

function Product() {
    return (
        <>
            <div className="shippingorderpage">
                <div className="shipingorder">
                    <div className="shipinfo">
                        <h2>Product Info</h2>
                        <ul>
                            <span className='fw-bold'>Product Id: </span>
                            <span className='opacity-75'>23672637236</span>
                            <br />
                            <span className='fw-bold'>Name: </span>
                            <span className='opacity-75'>Britaniya Biskit</span>
                            <br />
                            <span className='fw-bold'>Price: </span>
                            <span className='opacity-75'>599.0</span>
                        </ul>
                    </div>
                    <div className="shipinfo">
                        <h2>Quantity</h2>
                        <ul>
                            <span className='fw-bold'>Stock: </span>
                            <span>5 </span>
                            <br />
                            <span className='fw-bold'>Sell: </span>
                            <span>12</span>
                        </ul>
                    </div>
                    <div className="shipinfo">
                        <h2>Product Status</h2>
                        <ul>
                            <span className='fw-bold'>In-Stock </span>
                        </ul>
                    </div>
                    <div className="shipinfo">
                        <h2>Product</h2>
                        <ul>
                            <img src="/images/img1.jpg" style={{ 'width': '50px' }} />
                        </ul>
                    </div>
                </div>
                <div className="processorderbtn">
                    <h2>Control Status</h2>
                    <div className="processbtn">
                        <div className="input-group mt-2">
                            <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>In-Stock</option>
                                <option value="1">Out of Stock</option>
                            </select>
                            <button className="btn btn-outline-secondary" type="button">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;