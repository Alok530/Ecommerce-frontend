import React from 'react'
import './item.css'
import { useState } from 'react';
import StarRatings from 'react-star-ratings';

function Item({ itemUrl }) {
    const [temp, settemp] = useState(5)
    return (
        <>
            <div className="item">
                <div className="itemImg">
                    <img src={itemUrl} />
                </div>
                <div className="itemdesc">
                    <span className='fw-bold'>Van Heusen Yellow T shirt Men Polo</span>
                    <br />
                    <StarRatings
                        rating={4.5}
                        starRatedColor="orange"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="0"
                    />
                    <span className='ms-1 py-3'>(1 Reviews)</span>
                    <h5 className='fw-bold mt-2' style={{ 'color': 'red' }}>₹499</h5>
                </div>
            </div>
        </>
    )
}

export default Item