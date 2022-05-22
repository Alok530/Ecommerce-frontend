import { React, useContext, useEffect, useState } from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import KeyIcon from '@mui/icons-material/Key';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link, Navigate } from 'react-router-dom'
import EcartContext from '../../context/CartContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const host = "http://localhost:5000/api/";

function UpdatePassword() {
    const navigate = useNavigate();

    const { scrolltoTopfun } = useContext(EcartContext);
    useEffect(() => {
        scrolltoTopfun();
    }, [])

    const [oldpassword, setoldpassword] = useState("");
    const [newpassword, setnewpassword] = useState("");
    const [conformpassword, setconformpassword] = useState("");
    const [responseStatus, setresponseStatus] = useState(1);

    const changepassword = async (event) =>{
        event.preventDefault();
        console.log("enter for change password");
        try {
            console.log("enter for change password2",newpassword,conformpassword);
            if(newpassword!==conformpassword)
            {
                setresponseStatus(0);
                showTost("Password do not match");
                setnewpassword("");
                setconformpassword("");
                return;
            }
            let currentuserId = window.localStorage.getItem('ecomuserid');
            const response = await axios.put(host+`auth/updatepassword/${currentuserId}`,{oldpassword,newpassword});
            if(response.data.success){
                setoldpassword("");setnewpassword("");setconformpassword("");
                setresponseStatus(1);
                showTost(response.data.message);
                setTimeout(() => {
                    navigate('/account');                    
                }, 2000);
            }else{
                setresponseStatus(0);
                showTost(response.data.message);
                setoldpassword("");
                setnewpassword("");
                setconformpassword("");
            }
        } catch (error) {
            console.log("error inside changepassword fun");
        }
    }

    const showTost = (message) => {
        toast.success(message, {
            position: "bottom-center",
            autoClose: 2000,
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
            <Navbar />
            <ToastContainer toastStyle={{ backgroundColor: responseStatus?"green":"red" }} />
            <div className="paymentpage">
                <div className="cardinfo mt-4">
                    <h2 className='text-center mb-4'>Update Password</h2>
                    <form onSubmit={changepassword}>
                        <div className="cardInput"><KeyIcon className='me-2' /><input required value={oldpassword} onChange={(e)=>{setoldpassword(e.target.value)}} type="password" placeholder='Old Password' /></div>
                        <div className="cardInput"><LockOpenIcon className='me-2' /><input required value={newpassword} onChange={(e)=>{setnewpassword(e.target.value)}} type="password" placeholder='New Password' /></div>
                        <div className="cardInput"><LockIcon className='me-2' /><input required value={conformpassword} onChange={(e)=>{setconformpassword(e.target.value)}} type="password" placeholder='Confirm Password' /></div>
                        <button type='submit' className='orderBtn mt-0'>Change</button>
                    </form>
                </div>
            </div>
            <Footer />
            <Bottom />
        </>
    )
}

export default UpdatePassword