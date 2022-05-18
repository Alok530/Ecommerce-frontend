import React from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'

function Register() {
    return (
        <>
            <Navbar />
            <div className="paymentpage" style={{ 'minHeight': '80vh' }}>
                <div className="cardinfo mt-4">
                    <h2 className='text-center mb-4 fw-bolder'>Register</h2>
                    <div>
                        <div className="cardInput"><AccountCircleIcon className='me-2' /><input type="text" placeholder='Full Name' /></div>
                        <div className="cardInput mb-4"><EmailIcon className='me-2' /><input type="text" placeholder='Email-Id' /></div>
                        <div className="cardInput mb-4"><LockIcon className='me-2' /><input type="text" placeholder='Password' /></div>
                        <Link to={'/shop'}><button className='orderBtn mt-0'>Register</button></Link>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Link to={'/login'} style={{ textDecoration: 'none' }}><p className='mb-0 text-center'>Login</p></Link>
                        <Link to={'/'} style={{ textDecoration: 'none' }}><p className='mb-0 text-center'>Skip Now</p></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register