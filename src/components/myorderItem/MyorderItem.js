import React, { useEffect, useState } from 'react';
import './myorderitem.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import products from '../../products';
import axiosInstance from '../../config';
import CircularProgress from '@mui/material/CircularProgress';

const host = "http://localhost:5000/api/";

function MyorderItem({ id }) {
    const navigate = useNavigate();
    const [order, setorder] = useState({});
    const [productIndex, setproductIndex] = useState();
    const [isfetching, setisfetching] = useState(true);

    const fetchorder = async () => {
        try {
            setisfetching(true);
            const response = await axiosInstance.get('order/checkorderexist/' + id);
            if (!response.data.isExist) {
                navigate('/error');
            }
            
            for (let i = 0; i < products.length; i++) {
                if (products[i].id == response.data.order.productId) {
                    setproductIndex(i);
                    break;
                }
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
            {!isfetching ? <div className="orderdiv mb-2" onClick={()=>{navigate(`/trackorder/${id}`)}}>
                <div className="ordersubdiv">
                    <img src={products[productIndex].image} />
                    <div className='ms-2 d-flex flex-column justify-content-center'>
                        <p>{products[productIndex].tittle}</p>
                        <p className='opacity-50'>Color: Red, Size: S</p>
                    </div>
                </div>
                <div className="ordersubdivInSmall">
                    <img src={products[productIndex].image} />
                    <div className='ms-1 d-flex flex-column justify-content-center'>
                        <p>Delivered on Mar 17</p>
                        <p>{products[productIndex].tittle}</p>
                    </div>
                </div>
                <div className="ordersubdiv">
                    <p>${order.amount}</p>
                </div>
                <div className="ordersubdiv">
                    <p className='fw-bold'>Order Confirmed</p>
                </div>
            </div> : <div className="progressCicle"><CircularProgress /></div>}
        </>
    )
}

export default MyorderItem