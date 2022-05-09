import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShopIcon from '@mui/icons-material/Shop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
    const scrolatTopfun = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <div className="topbarContainer">
                <div className="col1">
                    <Link to={'/shop'} style={{ 'textDecoration': 'none', 'color': 'white' }}><span>FlipKart</span></Link>
                </div>
                <div className="col2">
                    <span>All Categories</span>
                    <span>Electronics</span>
                    <span>Footwears</span>
                    <span>Fashion</span>
                </div>
                <div className="col3">
                    {/*<span className='loginBtn me-2'>Login</span>
    <span className='loginBtn'>Register</span>*/}
                    <div className='bottomIconlink me-4'>
                        <Link to={'/account'}><AccountBoxIcon className='navbarIcon' /></Link>
                    </div>
                    <div className=''>
                        <Link to={'/cart'} style={{ 'textDecoration': 'none' }}><ShoppingCartIcon className='navbarIcon' /></Link>
                        <Link to={'/cart'} style={{ 'textDecoration': 'none' }}><span className='cartItemCount'>5</span></Link>
                    </div>
                </div>
            </div>
        </>
    );
}