import React from 'react';
import Bottom from '../../components/Bottom/Bottom';
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
            <Bottom/>
        </>
    )
}

export default AllOrder;