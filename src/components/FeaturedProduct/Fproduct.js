import React from 'react'
import './fproduct.css'

function Fproduct({imgUrl}) {
    return (
        <>
            <div className="Fproduct" style={{'backgroundColor':'white'}}>
                <div className="fimg">
                    <img src={imgUrl} />
                </div>
            </div>
        </>
    )
}

export default Fproduct