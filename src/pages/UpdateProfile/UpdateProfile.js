import {React,useContext,useEffect} from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
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
                    <h2 className='text-center mb-4'>Update Profile</h2>
                    <div>
                        <div className="cardInput"><AccountCircleIcon className='me-2' /><input type="text" placeholder='Full Name' /></div>
                        <div className="cardInput"><EmailIcon className='me-2' /><input type="text" placeholder='Email-Id' /></div>
                        <div className="cardInput"><LocalPhoneIcon className='me-2' /><input type="text" placeholder='Phone Number' /></div>
                        <Link to={'/account'}><button className='orderBtn mt-0'>Update</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
            <Bottom />
        </>
    )
}

export default UpdatePassword;