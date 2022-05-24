import EcartContext from "./CartContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

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
                const response = await axios.get(host + `auth/getuser/${id}`);
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
            const response = await axios.get(host + 'cart/fetchcart/' + id);
            setcartQuantity(response.data.length);
        }
    }

    return (
        <EcartContext.Provider value={{ scrolltoTopfun, fetchcurrentuserfun, fetchCurrentUserCartLength,currentuser, cartQuantity, setcartQuantity }}>
            {props.children}
        </EcartContext.Provider>
    )
}

export default CartStateContext;