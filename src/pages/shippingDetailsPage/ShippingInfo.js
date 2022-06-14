import { React, useContext, useEffect, useState } from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Navbar from '../../components/navbar/Navbar'
import './addtocart.css'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';
import EcartContext from '../../context/CartContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../config';

const host = "http://localhost:5000/api/";

function ShippingInfo() {
    const addressId = useParams().addressId;

    const navigate = useNavigate();
    const { scrolltoTopfun, subtotal, cartQuantity, fetchusercart } = useContext(EcartContext);

    useEffect(() => {
        console.log("id si--",addressId);
        if (!window.localStorage.getItem('ecomuserid')) {
            navigate('/login');
        }
        if(!addressId){
            navigate('/error');
        }
    }, [])

    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [pincode, setpincode] = useState("");
    const [mobile, setmobile] = useState("");

    // function for fetch address
    const fetchaddress = async () => {
        try {
            const id = window.localStorage.getItem('ecomuserid');
            if (!id) {
                navigate('/login');
            }
            const response = await axiosInstance.post('order/fetchaddress/' + 0, { "addressId": addressId });
            if (response.data.success) {
                const detail = response.data.address;
                if (detail.userId !== id) {
                        navigate('/error');
                }
                setname(detail.name);
                setaddress(detail.address);
                setpincode(detail.pincode);
                setmobile(detail.mobile);
            } else {
                navigate('/error');
            }
        } catch (error) {            
            navigate('/error');
        }
    }

    useEffect(() => {
        fetchaddress();
        scrolltoTopfun();
    }, [])

    useEffect(() => {
        if (window.localStorage.getItem('ecomuserid')) {
            fetchusercart();
        }
    }, [])

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
            <ToastContainer />
            <div className="shippingProgress">
                <div className="stage">
                    <AddLocationAltIcon className='' />
                    <span className=''>Address</span>
                </div>
                <div className="fgb"></div>
                <div className="stage">
                    <LocalShippingIcon style={{ color: 'orangered' }} className='' />
                    <span style={{ color: 'orangered' }} className=''>Order Summary</span>
                </div>
                <div className="fgb"></div>
                <div className="stage">
                    <AccountBalanceIcon className='' />
                    <span className=''>Payment</span>
                </div>
            </div>

            <div className="cartpage">
                <div className="cart">
                    <div className="orderAddress">
                        <div className="shippingInfo">
                            <h2 className='fw-bold'>Shipping Info</h2>
                            <div className="address mt-3">
                                <span className='fw-bold'>Name : </span><span>{name}</span>
                                <br />
                                <span className='fw-bold'>Phone : </span><span>91+ {mobile}</span>
                                <br />
                                <span className='fw-bold'>PIN Code : </span><span>{pincode}</span>
                                <br />
                                <span className='fw-bold'>Address : </span><span>{address}</span>
                            </div>
                        </div>
                    </div>
                    <div className="orderSummary">
                        <h3 className='text-center'>Order Summary</h3>
                        <div className="orderSummaryPrice">
                            <div className="orderPrice">
                                <p>Subtotal</p>
                                <p>₹ {Math.floor(subtotal)}</p>
                            </div>
                            <hr style={{ margin: '0px' }} />
                            <div className="orderPrice">
                                <p>Shipping Charge</p>
                                <p>₹ {Math.floor(cartQuantity * 40)}</p>
                            </div>
                            <hr style={{ margin: '0px' }} />
                            <div className="orderPrice">
                                <p>GST</p>
                                <p>₹ {Math.floor(subtotal / 20)}</p>
                            </div>
                            <hr style={{ margin: '0px' }} />
                            <div className="orderPrice">
                                <p>Discount</p>
                                <p>₹ {Math.floor(subtotal / 10)}</p>
                            </div>
                            <hr style={{ margin: '0px' }} />
                            <div className="orderPrice">
                                <h4>Total</h4>
                                <h5>₹ {Math.floor((subtotal + (subtotal / 20) + (cartQuantity * 40)) - (subtotal / 10))}</h5>
                            </div>
                            <Link to={'/payment'}><button className='orderBtn'>PAY NOW</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom />
        </>
    )
}

export default ShippingInfo;