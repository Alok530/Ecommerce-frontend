import React, { useEffect, useState } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './trackorder.css';
import Bottom from '../../components/Bottom/Bottom';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import products from '../../products';
import axiosInstance from '../../config';
import CircularProgress from '@mui/material/CircularProgress';

const host = "http://localhost:5000/api/";

function Trackorder() {
    const navigate = useNavigate();
    const [id, setid] = useState(useParams().id);
    const [order, setorder] = useState({});
    const [isfetching, setisfetching] = useState(true);
    const [productIndex, setproductIndex] = useState();

    const fetchorder = async () => {
        try {
            setisfetching(true);
            const response = await axiosInstance.get('order/checkorderexist/' + id);
            if (!response.data.isExist) {
                navigate('/error');
            }
            // console.log(id, response.data.isExist, response.data.order);
            for (let i = 0; i < products.length; i++) {
                if (products[i].id == response.data.order.productId) {
                    setproductIndex(i);
                    // console.log("index mila", i, id);
                    break;
                }
                // console.log("index mila", products[i].id, id);
            }
            setorder(response.data.order);
            setisfetching(false);
        } catch (error) {
            console.log("error inside fetchorder", error);
        }
    }

    useEffect(() => {
        fetchorder();
    }, [])

    useEffect(() => {
        if (!window.localStorage.getItem('ecomuserid')) {
            navigate('/login');
        }
    })


    return (
        <>
            <Navbar />
            <div className="trackOrderpage">
                {!isfetching ? <><div className="shippingProgress mb-4">
                    <div className="stage">
                        <CheckCircleIcon style={{ color: 'orangered' }} />
                        <span style={{ color: 'orangered' }}>Confirmed</span>
                    </div>
                    <div className="fgb"></div>
                    <div className="stage">
                        <LocalShippingIcon />
                        <span className=''>Shipped</span>
                    </div>
                    <div className="fgb"></div>
                    <div className="stage">
                        <AccountBalanceIcon />
                        <span className=''>Delivered</span>
                    </div>
                </div>
                <span className="fw-bold">Order Id:- </span>
                <span style={{'color':'blue'}}>{id}</span>
                    <div className="trackorderdiv2 my-4">
                        <div className="OrderAddress">
                            <div className="orderAddress" style={{ 'width': '100%' }}>
                                <div className="shippingInfo">
                                    <h2 className='fw-bold'>Delivery Address</h2>
                                    <div className="address mt-3">
                                        <span className='fw-bold'>Name : </span><span>{order.address.name}</span>
                                        <br />
                                        <span className='fw-bold'>Phone : </span><span>91+ {order.address.mobile}</span>
                                        <br />
                                        <span className='fw-bold'>PIN Code : </span><span>{order.address.pincode}</span>
                                        <br />
                                        <span className='fw-bold'>Address : </span><span>{order.address.address}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="orderItem">
                            <div className="orderAddress" style={{ 'width': '100%' }}>
                                <div className="shippingInfo">
                                    <h2 className='fw-bold'>Product Info</h2>
                                    <div className="address d-flex mt-3">
                                        <img src="/images/img5.jpg" />
                                        <div className='ms-3 d-flex flex-column'>
                                            <span>{products[productIndex].tittle}</span>
                                            <span>${order.amount}</span>
                                            <samp>Color: white</samp>
                                            <samp>Review: {products[productIndex].ratting} star</samp>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></> : <div className="progressCicle"><CircularProgress /></div>}
            </div>
            <Footer />
            <Bottom />
        </>
    )
}

export default Trackorder