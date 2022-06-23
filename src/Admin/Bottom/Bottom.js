import React from 'react'
import './bottom.css';
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CreateIcon from '@mui/icons-material/Create';

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
                        <Link style={{'textDecoration':'none'}} to={'/admin'}><HomeIcon style={{ color: "black", "height": '25px' }}/>
                        <p>Home</p></Link>
                    </div>
                </div>
                <div className="bottomIcon">
                    <div className='bottomIconlink'>
                        <Link style={{'textDecoration':'none'}} to={'/admin/orders'}><CreateIcon style={{ color: "black", "height": '25px' }} />
                        <p>Orders</p></Link>
                    </div>
                </div>
                <div className="bottomIcon">
                    <div className='bottomIconlink'>
                        <Link style={{'textDecoration':'none'}} to={'/admin/addnewproduct'}><AddBoxIcon style={{ color: "black", "height": '25px' }} />
                        <p>Add Item</p></Link>
                    </div>
                </div>
                <div className="bottomIcon">
                    <div className='bottomIconlink'>
                        <Link style={{'textDecoration':'none'}} to={'/admin/products'}><InventoryIcon style={{ color: "black", "height": '25px' }} />
                        <p>Products</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
