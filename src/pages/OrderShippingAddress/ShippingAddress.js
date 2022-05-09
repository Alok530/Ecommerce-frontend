import React from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import HomeIcon from '@mui/icons-material/Home';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Link } from 'react-router-dom';

function ShippingAddress() {
    return (
        <>
            <Navbar />
            
            <div className="shippingProgress">
                <div className="stage">
                    <AddLocationAltIcon style={{ color: 'orangered' }}/>
                    <span style={{ color: 'orangered' }}>Address</span>
                </div>
                <div className="fgb"></div>
                <div className="stage">
                    <LocalShippingIcon />
                    <span className=''>Order Summary</span>
                </div>
                <div className="fgb"></div>
                <div className="stage">
                    <AccountBalanceIcon/>
                    <span className=''>Payment</span>
                </div>
            </div>


            <div className="paymentpage">
                <div className="cardinfo mt-0">
                    <h2 className='text-center mb-4'>Shipping Details</h2>
                    <div>
                        <div className="cardInput"><PersonIcon className='me-2' /><input type="text" placeholder='Name' /></div>
                        <div className="cardInput"><HomeIcon className='me-2' /><input type="text" placeholder='Address' /></div>
                        <div className="cardInput"><PinDropIcon className='me-2' /><input type="text" placeholder='Pin Code' /></div>
                        <div className="cardInput"><PhoneIcon className='me-2' /><input type="text" placeholder='Mobile Number' /></div>
                        <Link to={'/shippingdetails'}><button className='orderBtn mt-0'>Continue</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
            <Bottom />
        </>
    )
}

export default ShippingAddress