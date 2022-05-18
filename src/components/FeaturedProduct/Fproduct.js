import React from 'react'
import './fproduct.css'

function Fproduct({ imgUrl }) {
    return (
        <>
            <div className="Fproduct" style={{ 'backgroundColor': 'white' }}>
                <div className="fimg">
                    <img src={imgUrl} />
                    <p className='mb-0 text-center mt-2 fPdesc'>50-60% Off</p> 
                    <p className='mb-0 text-center fPdesc' style={{'color':'gray'}}>Men's Clothing</p> 
                </div>
            </div>
        </>
    )
}

export default Fproduct