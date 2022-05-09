import React from 'react'
import './Order.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Bottom from '../../components/Bottom/Bottom';

function Order() {
    return (
        <>
            <Navbar />
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