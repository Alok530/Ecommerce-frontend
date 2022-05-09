import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

function Product() {
    return (
        <>
            <div className="col-md-3 mb-2 mt-2">
                <Link to={'/product'} style={{'textDecoration':'none','color':'black'}}><div className='m-1 product p-3'>
                    <div className='text-center'>
                        <img src="https://rukminim1.flixcart.com/image/416/416/kw9krrk0/headphone/e/w/c/-original-imag8z6gfvsgchzj.jpeg?q=70" />
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