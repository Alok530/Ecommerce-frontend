import React from 'react';
import Footer from '../../components/footer/Footer';
import MyorderItem from '../../components/myorderItem/MyorderItem';
import Navbar from '../../components/navbar/Navbar';
import './allorder.css';

function AllOrder() {
    return (
        <>
            <Navbar />
            <div className="allorderpage">
                <h2>Your Orders</h2>
                <div className="allorders">
                    <MyorderItem />
                    <MyorderItem />
                    <MyorderItem />
                    <MyorderItem />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AllOrder