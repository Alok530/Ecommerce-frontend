import {React,useContext,useEffect} from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Navbar from '../../components/navbar/Navbar'
import './addtocart.css'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';
import EcartContext from '../../context/CartContext'

function ShippingInfo() {
    const { scrolltoTopfun } = useContext(EcartContext);
    useEffect(() => {
        scrolltoTopfun();
    }, [])
    return (
        <>
            <Navbar />

            <div className="shippingProgress">
                <div className="stage">
                    <AddLocationAltIcon className='' />
                    <span className=''>Address</span>
                </div>
                <div className="fgb"></div>
                <div className="stage">
                    <LocalShippingIcon style={{ color: 'orangered' }} className='' />
                    <span style={{ color: 'orangered' }} className=''>Order Summary</span>
                </div>
                <div className="fgb"></div>
                <div className="stage">
                    <AccountBalanceIcon className='' />
                    <span className=''>Payment</span>
                </div>
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