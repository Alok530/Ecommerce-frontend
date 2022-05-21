import {React,useContext,useEffect} from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EcartContext from '../../context/CartContext'

const host = "http://localhost:5000/api/";

function Login() {
    const { scrolltoTopfun } = useContext(EcartContext);
    useEffect(() => {
        scrolltoTopfun();
    }, [])
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const loginfun = async (event) => {
        console.log('enter for login')
        event.preventDefault();
        try {
            const response = await axios.post(host + 'auth/login', { email, password });
            if (response.data.success == true) {
                window.localStorage.setItem('ecomuserid', response.data.user._id);
                console.log(response.data.user);
                navigate('/');
            } else {
                console.log(response.data.message);
                showTost(response.data.message);
                setemail("");
                setpassword("");
            }
        } catch (error) {
            console.log("error inside login fun", error);
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
            <ToastContainer toastStyle={{ backgroundColor: 'red' }} />
            <Navbar />
            <div className="paymentpage" style={{ 'minHeight': '80vh' }}>
                <div className="cardinfo mt-4">
                    <h2 className='text-center mb-4 fw-bolder'>Login</h2>
                    <form onSubmit={loginfun}>
                        <div className="cardInput mb-4"><EmailIcon className='me-2' /><input value={email} onChange={(e) => { setemail(e.target.value) }} required type="email" placeholder='Email-Id' /></div>
                        <div className="cardInput mb-4"><LockIcon className='me-2' /><input value={password} onChange={(e) => { setpassword(e.target.value) }} required minLength={4} type="password" placeholder='Password' /></div>
                        <button type='submit' className='orderBtn mt-0'>Login</button>
                    </form>
                    <div className="d-flex justify-content-between">
                        <Link to={'/register'} style={{ textDecoration: 'none' }}><p className='mb-0 text-center'>Create an Account</p></Link>
                        <Link to={'/'} style={{ textDecoration: 'none' }}><p className='mb-0 text-center'>Skip Now</p></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login