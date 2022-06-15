import { React, useContext, useEffect } from 'react'
import './Order.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Bottom from '../../components/Bottom/Bottom';
import EcartContext from '../../context/CartContext'
import { useParams } from 'react-router';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../config';

const host = "http://localhost:5000/api/";

function Order() {
    const navigate = useNavigate();
    const orderId = useParams().id;

    const { scrolltoTopfun } = useContext(EcartContext);

    useEffect(() => {
        scrolltoTopfun();
    }, []);

    const checkoutorder = async () => {
        try {
            console.log("order id is ",orderId);
            const response = await axiosInstance.get('order/checkorderexist/'+orderId);
            if(response.data.isExist){
                navigate('/vieworder/'+response.data.order);
            }else{
                navigate('/error');
            }
        } catch (error) {
            console.log("error inside checkoutorder",error);
        }
    }

    useEffect(() => {
        checkoutorder();
    }, [])

    return (
        <>
            <Navbar />
            <div className="orderpage">
                <div className="order text-center">
                    <CheckCircleIcon style={{ 'fontSize': '60px', color: 'orangered' }} />
                    <h2 id='temp'>Your Order has been Placed Successfully {orderId} </h2>
                    <Link style={{'textDecoration':'none'}} to='/trackorder'><button className='orderBtn mt-0' style={{ width: '40%' }}>View Order</button></Link>
                </div>
            </div>
            <Footer />
            <Bottom />
        </>
    )
}

export default Order