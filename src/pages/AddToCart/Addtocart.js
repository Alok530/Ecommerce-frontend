import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Bottom from '../../components/Bottom/Bottom'
import Navbar from '../../components/navbar/Navbar'
import './addtocart.css'
import Footer from '../../components/footer/Footer'
import EcartContext from '../../context/CartContext'
import axios from 'axios'
import CartItem from '../../components/cartItem/CartItem'
import products from '../../products';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const host = "http://localhost:5000/api/";

function Addtocart() {
    const { scrolltoTopfun, setcartQuantity, cartQuantity } = useContext(EcartContext);
    useEffect(() => {
        scrolltoTopfun();
    }, [])
    const [quantity, setquantity] = useState(1)
    const [cartproducts, setcartproducts] = useState([]);

    const fetchusercart = async () => {
        try {
            const id = window.localStorage.getItem('ecomuserid');
            const response = await axios.get(host + 'cart/fetchcart/' + id);
            setcartproducts(response.data);
            setcartQuantity(response.data.length);
        } catch (error) {
            console.log("error inside add to cart", error);
        }
    }
    useEffect(() => {
        fetchusercart();
    }, [])

    return (
        <>
            <Navbar />
            <div className="cartpage">
                {cartQuantity > 0 ? <>
                    <h2 className='text-center mb-4'>Your Bag</h2>
                    <div className="cart">
                        <div className="cartProducts">
                            {
                                cartproducts.map((item) => {
                                    return <CartItem key={item.productId} id={item.productId} quantity={item.quantity} />
                                })
                            }
                        </div>
                        <div className="orderSummary">
                            <h3 className='text-center'>Order Summary</h3>
                            <div className="orderSummaryPrice">
                                <div className="orderPrice">
                                    <p>Subtotal</p>
                                    <p>$ 80.0</p>
                                </div>
                                <hr style={{ margin: '0px' }} />
                                <div className="orderPrice">
                                    <p>Shipping Charge</p>
                                    <p>$ 80.0</p>
                                </div>
                                <hr style={{ margin: '0px' }} />
                                <div className="orderPrice">
                                    <p>GST</p>
                                    <p>$ 80.0</p>
                                </div>
                                <hr style={{ margin: '0px' }} />
                                <div className="orderPrice">
                                    <p>Discount</p>
                                    <p>$ 80.0</p>
                                </div>
                                <hr style={{ margin: '0px' }} />
                                <div className="orderPrice">
                                    <h4>Total</h4>
                                    <h5>$ 180.0</h5>
                                </div>
                                <Link to={'/shippingaddress'}><button className='orderBtn'>Place Order</button></Link>
                            </div>
                        </div>
                    </div>
                </> : <div className="EmptyCartDiv text-center">
                    <RemoveShoppingCartIcon style={{ 'fontSize': '50px', color: 'orangered' }} />
                    <h2 id='temp' className='fw-bold'>Your Cart is Empty</h2>
                    <Link to={'/products'}><button className='EmptyCartDivBtn mt-0'>Shop Now</button></Link>
                </div>}
            </div>
            <Footer />
            <Bottom />
        </>
    )
}

export default Addtocart