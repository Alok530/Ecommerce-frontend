import React from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const host = "http://localhost:5000/api/";

function Register() {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const registerfun = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(host + 'auth/register', { username, email, password });
            if (response.data.success == true) {
                navigate('/login');
            } else {
                showTost(response.data.message);
                setemail("");
                setpassword("");
                setusername("");
            }
        } catch (error) {
            showTost('Some server error');
            console.log("error inside register fun", error);
        }
    }

    const showTost = (message) => {
        toast.success(message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    }

    return (
        <>
            <ToastContainer toastStyle={{ backgroundColor: "red" }} />
            <Navbar />
            <div className="paymentpage" style={{ 'minHeight': '80vh' }}>
                <div className="cardinfo mt-4">
                    <h2 className='text-center mb-4 fw-bolder'>Register</h2>
                    <form onSubmit={registerfun}>
                        <div className="cardInput"><AccountCircleIcon className='me-2' /><input type="text" minLength={3} value={username} required onChange={(e) => { setusername(e.target.value) }} placeholder='Full Name' /></div>
                        <div className="cardInput mb-4"><EmailIcon className='me-2' /><input type="email" value={email} required onChange={(e) => { setemail(e.target.value) }} placeholder='Email-Id' /></div>
                        <div className="cardInput mb-4"><LockIcon className='me-2' /><input type="password" minLength={4} value={password} required onChange={(e) => { setpassword(e.target.value) }} placeholder='Password' /></div>
                        <button type='submit' className='orderBtn mt-0'>Register</button>
                    </form>
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