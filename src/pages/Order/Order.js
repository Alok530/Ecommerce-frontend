import React from 'react'
import './Order.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Bottom from '../../components/Bottom/Bottom';

function Order() {
    return (
        <>
            <Navbar />
            <div className='text-center shippingBar'>
                <hr className='shippingHR' />
                <ShoppingCartIcon className='shippingIcon shippingIconMid' />
                <LocalShippingIcon className='shippingIcon shippingIconMid' />
                <AccountBalanceIcon className='shippingIcon shippingIconMid' />
                <CheckCircleIcon style={{ color: 'orangered' }} className='shippingIcon' />
            </div>
            <div className='text-center'>
                <span className='shippingIcon shippingtextMid'>Address</span>
                <span className='shippingIcon shippingtextMid'>Order Details</span>
                <span className='shippingIcon shippingtextMid'>Payment</span>
                <span style={{ color: 'orangered' }} className='shippingIcon'>Order</span>
            </div>
            <div className="orderpage">
                <div className="order text-center">
                    <CheckCircleIcon style={{'fontSize':'60px',color:'orangered'}}/>
                    <h2 id='temp'>Your Order has been Placed Successfully</h2>
                    <button className='orderBtn mt-0' style={{width:'40%'}}>View Order</button>
                </div>
            </div>
            <Footer />
            <Bottom/>
        </>
    )
}

export default Order