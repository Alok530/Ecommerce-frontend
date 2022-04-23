import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-md-4 text-center footerLink">
                        <h5>CATEGORIES</h5>
                        <p>T-shirt</p>
                        <p>T-shirt</p>
                        <p>T-shirt</p>
                        <p>T-shirt</p>
                    </div>
                    <div className="col-md-4 text-center footerLink">
                        <h5>CATEGORIES</h5>
                        <p>Men</p>
                        <p>Women</p>
                        <p>Phones</p>
                        <p>Laptops</p>
                    </div>
                    <div className="col-md-4 text-center footerLink">
                        <h5>Follow Us</h5>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>LinkedList</p>
                        <p>You Tube</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer