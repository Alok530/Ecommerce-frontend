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

const host = "http://localhost:5000/api/";

function CartItem({ id, quantity }) {
    const {setcartQuantity,cartQuantity} = useContext(EcartContext);

    const [Quantity, setQuantity] = useState(quantity);
    const productID = id;
    const [product, setproduct] = useState({});

    const findIndex = () => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == productID) {
                setproduct(products[i]);
            }
        }
    }

    const [DisplayNone, setDisplayNone] = useState("")

    const removefun = async () => {
        try {
            const userid = window.localStorage.getItem('ecomuserid');
            const response = await axios.post(host+'cart/removecartitem',{"productId":productID,"userId":userid});
            console.log(response.data);
            if(response.data.success){
                setcartQuantity(cartQuantity-1);
                setDisplayNone("DisplayNone");
                showTost(response.data.message);
            }else{
                showTost(response.data.message);
            }
        } catch (error) {
            console.log("error inside removefun");
        }
    }

    useEffect(() => {
        console.log("jai mata di", id);
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
            <div className={`cartitem ${DisplayNone}`}>
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
                        <RemoveCircleOutlineIcon className='quantitytIcon' onClick={() => { setQuantity(Quantity - 1) }} />
                        <span className=''>  {Quantity}  </span>
                        <AddCircleOutlineTwoToneIcon className='quantitytIcon' onClick={() => { setQuantity(Quantity + 1) }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem;