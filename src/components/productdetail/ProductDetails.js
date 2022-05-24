import React from 'react'
import { Link } from 'react-router-dom'
import './productdetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import products from '../../products';
import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const host = "http://localhost:5000/api/";

function ProductDetails() {
    const navigate = useNavigate();
    const productID = useParams().id;
    const [product, setproduct] = useState({});

    const findIndex = () => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == productID) {
                setproduct(products[i]);
            }
        }
    }

    useEffect(() => {
        findIndex();
    }, [])

    const [isExist, setisExist] = useState(0);
    const checkProduct = async () => {
        try {
            const userId = window.localStorage.getItem('ecomuserid');
            const productId = productID;
            const response = await axios.post(host + 'cart/checkcart', { userId, productId });
            console.log("hello",response.data);
            if (response.data.isExist) {
                setisExist(1);
            } else {
                setisExist(0);
            }
        } catch (error) {
            console.log("error inside checkProduct", error);
        }
    }
    useEffect(() => {
        checkProduct();
    }, []);

    const buynowfun = async () => {
        if (!window.localStorage.getItem('ecomuserid')) {
            showTost("You are not login");
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } else {
            navigate('/cart');
        }
    }
    const addtocartfun = async () => {
        try {
            const userId = window.localStorage.getItem('ecomuserid');
            if (!userId) {
                showTost("You are not login");
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
            const productId = productID;
            const quantity = 5;
            const response = await axios.post(host + 'cart/addtocart', { userId, productId, quantity });
            console.log(response.data);
            if (response.data.success) {
                showTost(response.data.message);
                setTimeout(() => {
                    navigate('/cart');
                }, 2000);
            } else {
                showTost(response.data.message);
            }
        } catch (error) {
            console.log("add to cart error", error);
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

            <ToastContainer />
            <div className="col-md-6 temp">
                <div className='text-center'>
                    <img src={product.image} />
                </div>
            </div>
            <div className="col-md-6 temp">
                <span style={{ opacity: '0.7' }}>FashionCart</span>
                <h4 className='mb-0'>{product.tittle}</h4>
                <div style={{ 'display': 'flex', 'padding': '0px' }}>
                    <div><StarRatings
                        rating={product.ratting}
                        starRatedColor="rgb(255, 63, 127)"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="0"
                    />
                    </div>
                    <span style={{ 'paddingTop': '4px', 'marginLeft': '10px' }}>4 Reviews</span>
                </div>
                <span className='mt-2'>Eveniet similique quos, saepe quasi dignissimos a incidunt optio velit sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste dolorem earum eius iusto natus repellat sed hic obcaecati repellendus, saepe nisi nobis.</span>
                <div className='d-flex align-items-center mt-2'>
                    {product.size ? <div>
                        <h5 className='me-3' style={{ opacity: '0.9' }}>Size</h5>
                        <select className="form-select form-select-sm sizeInput" aria-label=".form-select-sm example">
                            <option value="1">SM</option>
                            <option value="2">M</option>
                            <option value="3">L</option>
                        </select>
                    </div> : <></>}
                    <>
                        <h5 className='me-3' style={{ opacity: '0.9' }}>Quantity</h5>
                        <select className="form-select form-select-sm sizeInput" aria-label=".form-select-sm example">
                            <option value="1">SM</option>
                            <option value="2">M</option>
                            <option value="3">L</option>
                        </select>
                    </>
                </div>
                <hr />
                <div>
                    <h4 className='d-inline' style={{ opacity: '0.8' }}>Status : </h4>
                    {product.quantity >= 1 ? <span style={{ color: 'green', 'fontWeight': '500', fontSize: '20px' }}>InStock</span>
                        : <span style={{ color: 'green', 'fontWeight': '500', fontSize: '20px' }}>Out of Stock</span>}
                </div>
                <hr />
                <div className='d-flex align-items-center'>
                    <h4 className='me-4' style={{ 'fontWeight': '700' }}>₹599</h4>
                    <button onClick={() => { buynowfun() }} className='me-3 BOTTON'>Buy Now</button>
                    {isExist == 0 ? <button className='BOTTON' onClick={() => { addtocartfun() }}>Add to Cart</button>
                        : <button className='BOTTON' onClick={() => { navigate('/cart') }}>Go to Cart</button>}
                </div>
                {/*<div className='mt-4'>
                    <span className='BOTTON' style={{'borderRadius':'18px',backgroundColor:'orangered'}}>Submit Review</span>
    </div>*/}
            </div>
        </>
    )
}

export default ProductDetails