import React from 'react'
import Bottom from '../../components/Bottom/Bottom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './Shiporder.css';

function ShipOrder() {
    return (
        <>
            <div className="shippingorderpage">
                <div className="shipingorder">
                    <div className="shipinfo">
                        <h2>Shipping Info</h2>
                        <ul>
                            <span className='fw-bold'>Name: </span>
                            <span className='opacity-75'>ALOK KUMAR RAI</span>
                            <br />
                            <span className='fw-bold'>Phone: </span>
                            <span className='opacity-75'>23672637236</span>
                            <br />
                            <span className='fw-bold'>Address: </span>
                            <span className='opacity-75'>HS-10, Bihar, chapra</span>
                        </ul>
                    </div>
                    <div className="shipinfo">
                        <h2>Payment</h2>
                        <ul>
                            <span className='fw-bold'>Paid </span>
                            <br />
                            <span className='fw-bold'>Amount: </span>
                            <span>236.5</span>
                            <br />
                        </ul>
                    </div>
                    <div className="shipinfo">
                        <h2>Order Status</h2>
                        <ul>
                            <span className='fw-bold'>Processing </span>
                        </ul>
                    </div>
                    <div className="shipinfo">
                        <h2>Your Cart Item</h2>
                        <ul>
                            <img src="/images/img1.jpg" style={{ 'width': '50px' }} />
                        </ul>
                    </div>
                </div>
                <div className="processorderbtn">
                    <h2>Process Order</h2>
                    <div className="processbtn">
                        <div className="input-group mt-2">
                            <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>Processing</option>
                                <option value="1">Shiped</option>
                                <option value="2">Out of Dilivery</option>
                                <option value="3">Dilevered</option>
                            </select>
                            <button className="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShipOrder;