import { React, useContext, useEffect, useState } from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './payment.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyIcon from '@mui/icons-material/Key';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Link, Navigate } from 'react-router-dom';
import EcartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'

function Payment() {
    const navigate = useNavigate();
    const { scrolltoTopfun, subtotal, cartQuantity } = useContext(EcartContext);
    const [option, setoption] = useState(0);
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
                    <LocalShippingIcon className='' />
                    <span className=''>Order Summary</span>
                </div>
                <div className="fgb"></div>
                <div className="stage">
                    <AccountBalanceIcon style={{ color: 'orangered' }} />
                    <span style={{ color: 'orangered' }} className=''>Payment</span>
                </div>
            </div>


            <div className="paymentpage">
                <h2>Payment</h2>
                <div className="mb-4 paymentOption">
                    <button className='me-1' onClick={() => {navigate('/order')}}>Cash on Dileviry</button>
                    <button className='ms-1' onClick={() => { setoption(1) }}>Pay Now</button>
                </div>
                {option == 1 ? <div className="cardinfo">
                    <h2 className='text-center'>Card Info</h2>
                    <div>
                        <div className="cardInput"><CreditCardIcon className='me-2' /><input type="text" placeholder='Card Number' /></div>
                        <div className="cardInput"><CalendarMonthIcon className='me-2' /><input type="text" placeholder='Expiery Date' /></div>
                        <div className="cardInput"><KeyIcon className='me-2' /><input type="text" placeholder='CVV' /></div>
                        <Link to={'/order'}><button className='orderBtn mt-0'>Pay - ₹{Math.floor((subtotal + (subtotal / 20) + (cartQuantity * 40)) - (subtotal / 10))}</button></Link>
                    </div>
                </div> : ''}
            </div>

            <Footer />
            <Bottom />
        </>
    )
}

export default Payment