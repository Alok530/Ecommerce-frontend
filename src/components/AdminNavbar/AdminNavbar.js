import React from 'react'
import './adminnavbar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CommentIcon from '@mui/icons-material/Comment';
import InventoryIcon from '@mui/icons-material/Inventory';
import HomeIcon from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';

function AdminNavbar() {
    return (
        <>
            <div className="adminnavbarpage">
                <div className="adnavbar">
                    <div className='adminnavul'>
                        <li className="adminnavListitem">
                            <Link className='navlink' to={'/admin'}><HomeIcon /></Link>
                            <Link className='navlink' to={'/admin'}><p className='ms-2'>Home</p></Link>
                        </li>
                        <li className="adminnavListitem">
                            <Link className='navlink' to={'/admin/orders'}><InventoryIcon /></Link>
                            <Link className='navlink' to={'/admin/orders'}><p className='ms-2'>Orders</p></Link>
                        </li>
                        <li className="adminnavListitem">
                            <Link className='navlink' to={'/admin/addnewproduct'}><AddBoxIcon /></Link>
                            <Link className='navlink' to={'/admin/addnewproduct'}><p className='ms-2'>Add New Product</p></Link>
                        </li>
                        <li className="adminnavListitem">
                            <Link className='navlink' to={'/admin/products'}><BorderColorIcon /></Link>
                            <Link className='navlink' to={'/admin/products'}><p className='ms-2'>Products</p></Link>
                        </li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminNavbar;