import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-md-3 text-center footerLink">
                        <h1 className='fw-bold'>Ecommerce</h1>
                        <span style={{ 'opacity': '0.6' }} className='text-center'>Lorem ipsum dolor Lorem ipsum dolor sit amet. nobis consectetur quam.</span>
                        <div className="mt-2 d-flex justify-content-center paymentcard">
                            <img src="/images/visa.png" />
                            <img className='mx-2' src="/images/mastercard.png" />
                            <img src="/images/paypal.png" />
                        </div>
                    </div>
                    <div className="col-md-3 text-center footerLink">
                        <h5>Follow Us</h5>
                        <div className="d-flex justify-content-center followicon">
                            <FacebookIcon />
                            <InstagramIcon className='mx-2' />
                            <YouTubeIcon />
                            <LinkedInIcon className='ms-2' />
                        </div>
                    </div>
                    <div className="col-md-3 text-center footerLink">
                        <h5 className='mt-0'>Categories</h5>
                        <p>Laptops</p>
                        <p>Mobiles</p>
                        <p>Fashion</p>
                        <p>Footwears</p>
                    </div>
                    <div className="col-md-3 text-center footerLink">
                        <h5>Categories</h5>
                        <p>Laptops</p>
                        <p>Mobiles</p>
                        <p>Fashion</p>
                        <p>Footwears</p>
                    </div>
                </div>
            </div>
            <hr className='mt-0' />
            <p className='text-center footerCopyright'>Copyright ©2022-Alok.info | All rights reserved</p>
        </div>
    )
}

export default Footer