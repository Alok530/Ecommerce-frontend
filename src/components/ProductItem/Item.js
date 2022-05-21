import React from 'react'
import './item.css'
import { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { useNavigate } from 'react-router-dom';

function Item({ item,cat }) {
    const [temp, settemp] = useState(5);
    const navigate = useNavigate();
    return (
        <>
            {item.category.indexOf(cat) !== -1 || cat===""? <div className="item" onClick={()=>{navigate('/product/'+item.id)}}>
                <div className="itemImg">
                    <img src={item.image} />
                </div>
                <div className="itemdesc">
                    <span className='fw-bold'>{item.tittle}</span>
                    <br />
                    <StarRatings
                        rating={item.ratting}
                        starRatedColor="orange"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="0"
                    />
                    <span className='ms-1 py-3'>(1 Reviews)</span>
                    <h5 className='fw-bold mt-2' style={{ 'color': 'red' }}>₹{item.price}</h5>
                </div>
            </div> : ''}
        </>
    )
}

export default Item