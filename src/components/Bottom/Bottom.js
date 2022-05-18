import React from 'react'
import './bottom.css';
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Bottom() {
    const scrolatTopfun = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <div className="Bottom">
                <div className="bottomIcon">
                    <div className="bottomIconlink">
                        <Link style={{'textDecoration':'none'}} to={'/'}><HomeIcon style={{ color: "black", "height": '25px' }}/>
                        <p>Shop</p></Link>
                    </div>
                </div>
                <div className="bottomIcon">
                    <div className='bottomIconlink'>
                        <Link style={{'textDecoration':'none'}} to={'/account'}><AccountBoxIcon style={{ color: "black", "height": '25px' }} />
                        <p>Account</p></Link>
                    </div>
                </div>
                <div className="bottomIcon">
                    <div className='bottomIconlink'>
                        <Link style={{'textDecoration':'none'}} to={'/cart'}><ShoppingCartIcon style={{ color: "black", "height": '25px' }} />
                        <p>Cart</p></Link>
                    </div>
                </div>
                {/*<div className="bottomIcon">
                    <div className='bottomIconlink'>
                        <Link to={'/shop'}><MenuIcon style={{ color: "black", "height": '25px' }} />
                        <p>Home</p></Link>
                    </div>
    </div>*/}
            </div>
        </>
    )
}
