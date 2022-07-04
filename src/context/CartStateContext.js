import EcartContext from "./CartContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import axiosInstance from "../config";

const host = "http://localhost:5000/api/";

const CartStateContext = (props) => {
    const navigate = useNavigate();

    // currentuser 
    const [currentuser, setcurrentuser] = useState({
        'username': '',
        'mobile': '',
        'gender': '',
        'email': ''
    });

    // for fetch current user
    const fetchcurrentuserfun = async () => {
        if (window.localStorage.getItem('ecomuserid')) {
            try {
                const id = window.localStorage.getItem('ecomuserid');
                const response = await axiosInstance.get(`auth/getuser/${id}`);
                const user = response.data.user;
                setcurrentuser({
                    'username': user.username,
                    'email': user.email,
                    'gender': user.gender,
                    'mobile': user.mobile,
                });
            } catch (error) {
                console.log("Inside fetchuserfun", error);
            }
        }
    }

    // scroll to function
    const scrolltoTopfun = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // for calculate cart items 
    const [cartQuantity, setcartQuantity] = useState(0);

    // function for set cart quantity
    const fetchCurrentUserCartLength = async () => {
        if (window.localStorage.getItem('ecomuserid')) {
            const id = window.localStorage.getItem('ecomuserid');
            const response = await axiosInstance.get('cart/fetchcart/' + id);
            // const response = await axios.get(host+'cart/fetchcart/' + id);
            if (response.data.length==0) {
                setcartQuantity(0);
                return;
            } else {
                setcartQuantity(response.data.length);
            }
        }
    }

    // for total price of cart
    const [subtotal, setsubtotal] = useState(0);
    const [cartproducts, setcartproducts] = useState([]);

    const fetchusercart = async () => {
        try {
            const id = window.localStorage.getItem('ecomuserid');
            const response = await axiosInstance.get('cart/fetchcart/' + id);
            if (response.data.length == 0) {
                setsubtotal(0);
            }
            let temp = 0;
            for (let i = 0; i < response.data.length; i++) {
                temp = temp + response.data[i].price;
            }
            setsubtotal(temp);
            setcartproducts(response.data);
            setcartQuantity(response.data.length);
        } catch (error) {
            console.log("error inside add to cart", error);
        }
    }


    return (
        <EcartContext.Provider value={{ fetchusercart, cartproducts, setcartproducts, scrolltoTopfun, fetchcurrentuserfun, fetchCurrentUserCartLength, currentuser, cartQuantity, setcartQuantity, subtotal, setsubtotal }}>
            {props.children}
        </EcartContext.Provider>
    )
}

export default CartStateContext;