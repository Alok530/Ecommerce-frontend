import React, { useEffect } from 'react'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import Bottom from '../Bottom/Bottom';
import Footer from '../footer/Footer';
import Navbar from '../adminnavbar/Navbar';
import Allproduct from '../Allproduct/Allproduct';
import Sell from '../SellForm/Sell';
import Adminorders from '../adminorder/Adminorders';
import ShipOrder from '../AdminShipOrder/ShipOrder';
import './admin.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Adminprofile from '../Adminprofile/Adminprofile';

function Admin() {
    

    return (
        <>
        <Navbar/>
            <div className="adminpage">
                <AdminNavbar />
                <Routes>
                    <Route path="/" element={<Adminprofile />} />
                    <Route path="/dashboard" element={<Adminorders />} />
                    <Route path="/orders" element={<Adminorders />} />
                    <Route path="/shiping/order" element={<ShipOrder />} />
                    <Route path="/products" element={<Allproduct />} />
                    <Route path="/addnewproduct" element={<Sell />} />
                </Routes>
            </div>
            <Footer/>
            <Bottom/>
        </>
    )
}

export default Admin;