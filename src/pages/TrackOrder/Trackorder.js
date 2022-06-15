import React from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './trackorder.css';

function Trackorder() {
    return (
        <>
            <Navbar />
            <div className="trackOrderpage">
                <div className="shippingProgress mb-4">
                    <div className="stage">
                        <CheckCircleIcon style={{ color: 'orangered' }} />
                        <span style={{ color: 'orangered' }}>Confirmed</span>
                    </div>
                    <div className="fgb"></div>
                    <div className="stage">
                        <LocalShippingIcon />
                        <span className=''>Shipped</span>
                    </div>
                    <div className="fgb"></div>
                    <div className="stage">
                        <AccountBalanceIcon />
                        <span className=''>Delivered</span>
                    </div>
                </div>
                <div className="trackorderdiv2 my-4">
                    <div className="OrderAddress">
                        <div className="orderAddress" style={{ 'width': '100%' }}>
                            <div className="shippingInfo">
                                <h2 className='fw-bold'>Delivery Address</h2>
                                <div className="address mt-3">
                                    <span className='fw-bold'>Name : </span><span>Alok kumar rai</span>
                                    <br />
                                    <span className='fw-bold'>Phone : </span><span>91+ 8748738778</span>
                                    <br />
                                    <span className='fw-bold'>PIN Code : </span><span>841417</span>
                                    <br />
                                    <span className='fw-bold'>Address : </span><span>Chapra, Bihar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="orderItem">
                        <div className="orderAddress" style={{ 'width': '100%' }}>
                            <div className="shippingInfo">
                                <h2 className='fw-bold'>Product Info</h2>
                                <div className="address d-flex mt-3">
                                    <img src="/images/img5.jpg" />
                                    <div className='ms-3 d-flex flex-column'>
                                        <span>Cotton Shirt for men</span>
                                        <span>$499</span>
                                        <samp>Color: white</samp>
                                        <samp>Review: 4 star</samp>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Trackorder