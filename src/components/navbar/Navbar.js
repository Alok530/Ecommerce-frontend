import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShopIcon from '@mui/icons-material/Shop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const scrolatTopfun = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const [currentnav, setcurrentnav] = useState("");
    useEffect(() => {
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
                <div className="col2">
                    <span><Link to={'/'} className={`link ${currentnav == 1 ? "selectnav" : ''}`}>Home</Link></span>
                    <span><Link to={'/products'} className={`link ${currentnav === 2 ? "selectnav" : ''}`}>Products</Link></span>
                    <div className="">
                        <span data-bs-toggle="dropdown" className='link' aria-expanded="false">
                            Categories
                        </span>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/products">All</Link></li>
                            <li><Link className="dropdown-item" to="/products">Laptop</Link></li>
                            <li><Link className="dropdown-item" to="/products">Mobile</Link></li>
                            <li><Link className="dropdown-item" to="/products">Footwears</Link></li>
                            <li><Link className="dropdown-item" to="/products">T-Shirt</Link></li>
                            <li><Link className="dropdown-item" to="/products">Shirt</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col3">
                    {window.localStorage.getItem('ecomuserid') ? <><div className='bottomIconlink me-4'>
                        <Link to={'/account'}><AccountBoxIcon className='navbarIcon' /></Link>
                    </div>
                        <div className=''>
                            <Link to={'/cart'} style={{ 'textDecoration': 'none' }}><ShoppingCartIcon className='navbarIcon' /></Link>
                            <Link to={'/cart'} style={{ 'textDecoration': 'none' }}><span className='cartItemCount'>5</span></Link>
                        </div></> : <>
                        <Link style={{'textDecoration': 'none'}} to={'/login'}><span className='loginBtn me-2'>Login</span></Link>
                        <Link style={{'textDecoration': 'none'}} to={'/register'}><span className='loginBtn'>Register</span>  </Link>
                    </>}
                </div>
            </div>
        </>
    );
}