import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShopIcon from '@mui/icons-material/Shop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect, useContext } from 'react';
import EcartContext from '../../context/CartContext';

export default function Navbar() {
    const { cartQuantity, fetchCurrentUserCartLength } = useContext(EcartContext);
    const scrolatTopfun = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const [currentnav, setcurrentnav] = useState("");
    const [searchQuery, setsearchQuery] = useState("");

    useEffect(() => {
        fetchCurrentUserCartLength();
        if (window.location.pathname == '/')
            setcurrentnav(1);
        else if (window.location.pathname == '/products')
            setcurrentnav(2);
    }, [])

    return (
        <>
            <div className="topbarContainer">
                <div className="col1">
                    <Link to={'/'} style={{ 'textDecoration': 'none', 'color': 'white' }}><span>FlipKart</span></Link>
                </div>

                <div className="col3">
                    <div className='bottomIconlink me-4'>
                        {/*<Link to={'/account'}><AccountBoxIcon className='navbarIcon' /></Link>*/}

                        <Link style={{ 'textDecoration': 'none' }} to={'/login'}><span className='loginBtn me-2'>Login</span></Link>
                        <Link style={{ 'textDecoration': 'none' }} to={'/register'}><span className='loginBtn'>Register</span>  </Link>

                    </div>
                </div>
            </div>
        </>
    );
}