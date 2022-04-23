import React from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Navbar from '../../components/navbar/Navbar'
import './addtocart.css'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';

function ShippingInfo() {
    return (
        <>
            <Navbar />
            <div className='text-center shippingBar'>
                <hr className='shippingHR' />
                <AddLocationAltIcon className='shippingIcon shippingIconMid' />
                <LocalShippingIcon style={{ color: 'orangered' }} className='shippingIcon shippingIconMid' />
                <AccountBalanceIcon className='shippingIcon shippingIconMid' />
                <CheckCircleIcon className='shippingIcon' />
            </div>
            <div className='text-center'>
                <span className='shippingIcon shippingtextMid'>Cart</span>
                <span style={{ color: 'orangered' }} className='shippingIcon shippingtextMid'>Order Details</span>
                <span className='shippingIcon shippingtextMid'>Payment</span>
                <span className='shippingIcon'>Order</span>
            </div>
            <div className="cartpage">
                <div className="cart">
                    <div className="orderAddress">
                        <div className="shippingInfo">
                            <h2>Shipping Info</h2>
                            <div className="address mt-3">
                                <span>Name : </span><span>Alok Kumar Rai</span>
                                <br />
                                <span>Phone : </span><span>91+ 7321015099</span>
                                <br />
                                <span>PIN Code : </span><span>841417</span>
                                <br />
                                <span>Address : </span><span>HN-10, Aazad nagar, Chhapra (Saran)</span>
                            </div>
                        </div>
                    </div>
                    <div className="orderSummary">
                        <h3 className='text-center'>Order Summary</h3>
                        <div className="orderSummaryPrice">
                            <div className="orderPrice">
                                <p>Subtotal</p>
                                <p>$ 80.0</p>
                            </div>
                            <hr style={{ margin: '0px' }} />
                            <div className="orderPrice">
                                <p>Shipping Charge</p>
                                <p>$ 80.0</p>
                            </div>
                            <hr style={{ margin: '0px' }} />
                            <div className="orderPrice">
                                <p>GST</p>
                                <p>$ 80.0</p>
                            </div>
                            <hr style={{ margin: '0px' }} />
                            <div className="orderPrice">
                                <p>Discount</p>
                                <p>$ 80.0</p>
                            </div>
                            <hr style={{ margin: '0px' }} />
                            <div className="orderPrice">
                                <h4>Total</h4>
                                <h5>$ 180.0</h5>
                            </div>
                            <Link to={'/payment'}><button className='orderBtn'>PAY NOW</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom />
        </>
    )
}

export default ShippingInfo;