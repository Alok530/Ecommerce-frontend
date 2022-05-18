import React from 'react'
import { Link } from 'react-router-dom'
import './productdetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import products from '../../products';
import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';

function ProductDetails() {
    const productID = useParams().id;
    const [productIndex, setproductIndex] = useState(-1);
    const [product, setproduct] = useState({});

    const findIndex = () => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == productID) {
                console.log(products[i]);
                setproduct(products[i]);
            }
        }
    }

    useEffect(() => {
        console.log("jai mata di", productID);
        findIndex();
    }, [])


    const showTost = () => {
        toast.success('Item added to cart', {
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

            <ToastContainer />
            <div className="col-md-6 temp">
                <div className='text-center'>
                    <img src={product.image} />
                </div>
            </div>
            <div className="col-md-6 temp">
                <span style={{ opacity: '0.7' }}>FashionCart</span>
                <h4 className='mb-0'>{product.tittle}</h4>
                <div style={{ 'display': 'flex','padding': '0px' }}>
                    <div><StarRatings
                        rating={product.ratting}
                        starRatedColor="rgb(255, 63, 127)"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="0"
                    />
                    </div>
                    <span style={{'paddingTop':'4px','marginLeft':'10px'}}>4 Reviews</span>
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
                    <Link to={'/cart'}><button className='me-3 BOTTON'>Buy Now</button></Link>
                    <button className='BOTTON' onClick={showTost}>Add to Cart</button>
                </div>
                {/*<div className='mt-4'>
                    <span className='BOTTON' style={{'borderRadius':'18px',backgroundColor:'orangered'}}>Submit Review</span>
    </div>*/}
            </div>
        </>
    )
}

export default ProductDetails