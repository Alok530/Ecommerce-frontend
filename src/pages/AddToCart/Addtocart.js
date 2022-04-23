import React from 'react'
import { Link } from 'react-router-dom'
import Bottom from '../../components/Bottom/Bottom'
import Navbar from '../../components/navbar/Navbar'
import './addtocart.css'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';

function Addtocart() {
    return (
        <>
            <Navbar />
            <div className="cartpage">
                <h2 className='text-center mb-4'>Your Bag</h2>
                <div className="cart">
                    <div className="cartProducts">
                        <div className="cartitem">
                            <div className="cartItemPic">
                                <img src="/images/img5.jpg" />
                            </div>
                            <div className='cartItemRight'>
                                <div className="cartItemDesc ps-1">
                                    <span className="fw-bold">Product : </span><span>Spark dkfdfj dkfjdk fjk Shose</span>
                                    <br />
                                    <span className='fw-bold'>Size : </span><span>8</span>                                    
                                    <br />
                                    <span className='fw-bold'>Price: </span><span className='fw-bolder'>₹599</span>                                    
                                    <br />
                                    <span className='text-danger'>Remove</span>
                                </div>
                                <div className='cartItemqueantity'>
                                    <RemoveCircleOutlineIcon />
                                    <span className='fw-bold'>  1  </span>
                                    <AddCircleOutlineTwoToneIcon />
                                </div>
                            </div>
                        </div>
                        <div className="cartitem">
                            <div className="cartItemPic">
                                <img src="/images/img5.jpg" />
                            </div>
                            <div className='cartItemRight'>
                                <div className="cartItemDesc ps-1">
                                    <span className="fw-bold">Product : </span><span>Spark dkfdfj dkfjdk fjk Shose</span>
                                    <br />
                                    <span className='fw-bold'>Size : </span><span>8</span>                                    
                                    <br />
                                    <span className='fw-bold'>Price: </span><span className='fw-bolder'>₹599</span>                                    
                                    <br />
                                    <span className='text-danger'>Remove</span>
                                </div>
                                <div className='cartItemqueantity'>
                                    <RemoveCircleOutlineIcon />
                                    <span className='fw-bold'>  1  </span>
                                    <AddCircleOutlineTwoToneIcon />
                                </div>
                            </div>
                        </div>
                        <div className="cartitem">
                            <div className="cartItemPic">
                                <img src="/images/img5.jpg" />
                            </div>
                            <div className='cartItemRight'>
                                <div className="cartItemDesc ps-1">
                                    <span className="fw-bold">Product : </span><span>Spark dkfdfj dkfjdk fjk Shose</span>
                                    <br />
                                    <span className='fw-bold'>Size : </span><span>8</span>                                    
                                    <br />
                                    <span className='fw-bold'>Price: </span><span className='fw-bolder'>₹599</span>                                    
                                    <br />
                                    <span className='text-danger'>Remove</span>
                                </div>
                                <div className='cartItemqueantity'>
                                    <RemoveCircleOutlineIcon />
                                    <span className='fw-bold'>  1  </span>
                                    <AddCircleOutlineTwoToneIcon />
                                </div>
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
                            <Link to={'/shippingaddress'}><button className='orderBtn'>Place Order</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom />
        </>
    )
}

export default Addtocart