import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-md-6 text-center footerLink">
                        <h5>Ecommerce</h5>
                    </div>
                    <div className="col-md-3 text-center footerLink">
                        <h5>Categories</h5>
                        <p>Laptops</p>
                        <p>Mobiles</p>
                        <p>Fashion</p>
                        <p>Footwears</p>
                    </div>
                    <div className="col-md-3 text-center footerLink">
                        <h5>Follow Us</h5>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>LinkedIn</p>
                        <p>You Tube</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer