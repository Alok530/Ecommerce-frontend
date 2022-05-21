import { React, useContext, useEffect } from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import KeyIcon from '@mui/icons-material/Key';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom'
import EcartContext from '../../context/CartContext'

function UpdatePassword() {
    const { scrolltoTopfun } = useContext(EcartContext);
    useEffect(() => {
        scrolltoTopfun();
    }, [])
    return (
        <>
            <Navbar />
            <div className="paymentpage">
                <div className="cardinfo mt-4">
                    <h2 className='text-center mb-4'>Update Password</h2>
                    <div>
                        <div className="cardInput"><KeyIcon className='me-2' /><input type="text" placeholder='Old Password' /></div>
                        <div className="cardInput"><LockOpenIcon className='me-2' /><input type="text" placeholder='New Password' /></div>
                        <div className="cardInput"><LockIcon className='me-2' /><input type="text" placeholder='Confirm Password' /></div>
                        <Link to={'/account'}><button className='orderBtn mt-0'>Change</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
            <Bottom />
        </>
    )
}

export default UpdatePassword