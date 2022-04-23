import React from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './payment.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyIcon from '@mui/icons-material/Key';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom'

function Payment() {
    return (
        <>
            <Navbar/>
            <div className='text-center shippingBar'>
                <hr className='shippingHR' />
                <ShoppingCartIcon className='shippingIcon shippingIconMid' />
                <LocalShippingIcon className='shippingIcon shippingIconMid' />
                <AccountBalanceIcon style={{color:'orangered'}} className='shippingIcon shippingIconMid' />
                <CheckCircleIcon className='shippingIcon' />
            </div>
            <div className='text-center'>
                <span className='shippingIcon shippingtextMid'>Address</span>
                <span className='shippingIcon shippingtextMid'>Order Details</span>
                <span style={{color:'orangered'}} className='shippingIcon shippingtextMid'>Payment</span>
                <span className='shippingIcon'>Order</span>
            </div>
            <div className="paymentpage">
                <div className="cardinfo">
                    <h2 className='text-center'>Card Info</h2>
                    <div>
                        <div className="cardInput"><CreditCardIcon className='me-2'/><input type="text" placeholder='Card Number' /></div>
                        <div className="cardInput"><CalendarMonthIcon className='me-2'/><input type="text" placeholder='Expiery Date' /></div>
                        <div className="cardInput"><KeyIcon className='me-2'/><input type="text" placeholder='CVV' /></div>
                        <Link to={'/order'}><button className='orderBtn mt-0'>Pay - ₹599</button></Link>
                    </div>
                </div>
            </div>
            <Footer/>
            <Bottom/>
        </>
    )
}

export default Payment