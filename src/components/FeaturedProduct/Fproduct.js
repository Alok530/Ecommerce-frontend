import React from 'react'
import './fproduct.css'
import { Link } from 'react-router-dom';

function Fproduct({ imgUrl }) {
    return (
        <>
            <div className="Fproduct" style={{ 'backgroundColor': 'white'}}>
                <Link to={'/products'} style={{'textDecoration':'none'}}><div className="fimg">
                    <img src={imgUrl} />
                    <p className='mb-0 text-center mt-2 fPdesc'>50-60% Off</p>
                    <p className='mb-0 text-center fPdesc' style={{ 'color': 'gray' }}>Men's Clothing</p>
                </div></Link>
            </div>
        </>
    )
}

export default Fproduct