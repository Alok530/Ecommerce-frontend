import React from 'react'
import { Link } from 'react-router-dom'
import './productdetails.css'

function ProductDetails() {
    return (
        <>
            <div className="col-md-6 temp">
                <div className='text-center'>
                    <img className='productDetailImg' src="/images/img5.jpg" />
                </div>
            </div>
            <div className="col-md-6 temp">
                <span style={{ opacity: '0.7' }}>FashionCart</span>
                <h4 className='mb-2'>Women Kurta</h4>
                <span>Eveniet similique quos, saepe quasi dignissimos a incidunt optio velit sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste dolorem earum eius iusto natus repellat sed hic obcaecati repellendus, saepe nisi nobis.</span>
                <div className='d-flex align-items-center mt-2'>
                    <h5 className='me-3' style={{ opacity: '0.9' }}>Size</h5>
                    <select class="form-select form-select-sm sizeInput" aria-label=".form-select-sm example">
                        <option value="1">SM</option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                    </select>
                </div>
                <hr />
                <div>
                    <h4 className='d-inline' style={{ opacity: '0.8' }}>Status : </h4>
                    <span style={{ color: 'green', 'fontWeight': '500', fontSize: '20px' }}>InStock</span>
                </div>
                <hr />
                <div className='d-flex align-items-center'>
                    <h4 className='me-4' style={{'fontWeight':'700'}}>₹599</h4>
                    <Link to={'/cart'}><button className='me-3 BOTTON'>Buy Now</button></Link>
                    <button className='BOTTON'>Add to Cart</button>
                </div>
                {/*<div className='mt-4'>
                    <span className='BOTTON' style={{'borderRadius':'18px',backgroundColor:'orangered'}}>Submit Review</span>
    </div>*/}
            </div>
        </>
    )
}

export default ProductDetails