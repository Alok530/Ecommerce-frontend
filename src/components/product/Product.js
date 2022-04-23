import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

function Product() {
    return (
        <>
            <div className="col-md-3 mb-2 mt-2">
                <Link to={'/product'} style={{'textDecoration':'none','color':'black'}}><div className='m-1 product p-3'>
                    <div className='text-center'>
                        <img style={{height:'300px',width:'100%'}} src="/images/img5.jpg" />
                    </div>
                    <h4 className='my-0'>Women Kurta</h4>
                    <p className='mb-0'>$125</p>
                    <span className='my-0'>Eveniet similique quos, saepe quasi dignissimos a incidunt optio velit sed.</span>
                </div></Link>
            </div>
        </>
    )
}

export default Product