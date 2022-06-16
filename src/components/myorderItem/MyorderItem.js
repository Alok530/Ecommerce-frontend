import React from 'react';
import './myorderitem.css';

const host = "http://localhost:5000/api/";

function MyorderItem() {
    return (
        <>
            <div className="orderdiv mb-2">
                <div className="ordersubdiv">
                    <img src="images/img3.jpg" />
                    <div className='ms-2 d-flex flex-column justify-content-center'>
                        <p>T-shirt for men</p>
                        <p className='opacity-50'>Color: Red, Size: S</p>
                    </div>
                </div>
                <div className="ordersubdivInSmall">
                    <img src="images/img3.jpg" />
                    <div className='ms-2 d-flex flex-column justify-content-center'>
                        <p className='fw-bold'>Delivered on Mar 17</p>
                        <p>T-shirt for men</p>
                    </div>
                </div>
                <div className="ordersubdiv">
                    <p>$234</p>
                </div>
                <div className="ordersubdiv">
                    <p>Delivered on Mar 17</p>
                </div>
            </div>

        </>
    )
}

export default MyorderItem