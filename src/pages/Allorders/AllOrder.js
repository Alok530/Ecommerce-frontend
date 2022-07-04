import React from 'react';
import Bottom from '../../components/Bottom/Bottom';
import Footer from '../../components/footer/Footer';
import MyorderItem from '../../components/myorderItem/MyorderItem';
import Navbar from '../../components/navbar/Navbar';
import './allorder.css';
import { useState, useEffect } from 'react';
import axiosInstance from '../../config';
import axios from 'axios';

const host = "http://localhost:5000/api/";


function AllOrder() {
    const fetchallorder = async () => {
        try {
            let userId = window.localStorage.getItem('ecomuserid');
            const response = await axiosInstance.get(`order/fetchallorder/${userId}`);
            setallorder((response.data.temp).reverse()); 
        } catch (error) {
            console.log('err-or inside fetchallorder', error);
        }
    };

    const [allorder, setallorder] = useState([]);

    useEffect(() => {
        fetchallorder();
    }, [])

    return (
        <>
            <Navbar />
            <div className="allorderpage">
                <h2>Your Orders</h2>
                <div className="allorders">
                    {
                        allorder.map((item) => {
                            return <MyorderItem key={item._id} id={item._id}/>;
                        })
                    }
                </div>
            </div>
            <Footer />
            <Bottom />
        </>
    )
}

export default AllOrder;