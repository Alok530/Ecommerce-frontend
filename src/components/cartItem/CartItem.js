import React from 'react'
import './cartitem.css'
import { useState, useEffect, useContext } from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import products from '../../products';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EcartContext from '../../context/CartContext';
import axiosInstance from '../../config';
import CircularProgress from '@mui/material/CircularProgress';

const host = "http://localhost:5000/api/";

function CartItem({ id, quantity, price}) {
    const {setcartQuantity,cartQuantity,subtotal,setsubtotal} = useContext(EcartContext);

    const [Quantity, setQuantity] = useState(quantity);
    const productID = id;
    const [product, setproduct] = useState({});

    const findIndex = () => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == productID) {
                setproduct(products[i]);
                break;
            }
        }
        setisfetching(false);
    }

    const [DisplayNone, setDisplayNone] = useState("");
    const [isfetching, setisfetching] = useState(true);

    const removefun = async () => {
        try {
            const userid = window.localStorage.getItem('ecomuserid');
            const response = await axiosInstance.post('cart/removecartitem',{"productId":productID,"userId":userid})
            if(response.data.success){
                setcartQuantity(cartQuantity-1);
                setDisplayNone("DisplayNone");
                setsubtotal(subtotal-price);
                showTost(response.data.message);
            }else{
                showTost(response.data.message);
            }
        } catch (error) {
            console.log("error inside removefun");
        }
    }

    const decreaseQuantity=()=>{
        if(Quantity==1){
            showTost("Quantity Can't be zero");
            return;
        }
        setsubtotal(subtotal-price);
        setQuantity(Quantity - 1);
    }

    const increaseQuantity=()=>{
        setsubtotal(subtotal+price);
        setQuantity(Quantity + 1);
    }

    useEffect(() => {
        findIndex();
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
        <ToastContainer />
            {!isfetching?<div className={`cartitem ${DisplayNone}`}>
                <div className="cartItemPic">
                    <img src={product.image} />
                </div>
                <div className='cartItemRight'>
                    <div className="cartItemDesc ps-1">
                        <span>{product.tittle}</span>
                        <br />
                        <span className='fw-bold'>Size : </span><span>8</span>
                        <br />
                        <span className='fw-bold'>Price: </span><span className='fw-bolder'>₹{product.price}</span>
                        <br />
                        <span onClick={()=>{removefun()}} className='text-danger' style={{'cursor':'pointer'}}>Remove</span>
                    </div>
                    <div className='cartItemqueantity'>
                        <span className='ms-1 me-2'>Qty</span>
                        <RemoveCircleOutlineIcon className='quantitytIcon' onClick={() => { decreaseQuantity() }} />
                        <span className=''>  {Quantity}  </span>
                        <AddCircleOutlineTwoToneIcon className='quantitytIcon' onClick={() => { increaseQuantity()  }} />
                    </div>
                </div>
            </div>:<div className="progressCicle"><CircularProgress /></div>}
        </>
    )
}

export default CartItem;