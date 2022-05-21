import EcartContext from "./CartContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const host = "http://localhost:5000/api/";

const CartStateContext = (props) => {
    const navigate = useNavigate();

    // user 
    const [user, setuser] = useState({});

    const [isfetching, setisfetching] = useState(0);
    const [iserror, setiserror] = useState(0);

    // for fetch current user
    const fetchcurrentuserfun = async (uid) => {
        if (window.localStorage.getItem('currentUID')) {
            try {
                const id = window.localStorage.getItem('ecartuserid');
                const response = await axios.get(host+`/users?userId=${id}`);
                setuser(response.data);
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

    return (
        <EcartContext.Provider value={{scrolltoTopfun}}>
            {props.children}
        </EcartContext.Provider>
    )
}

export default CartStateContext;