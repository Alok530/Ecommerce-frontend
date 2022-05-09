import React from 'react'
import './home.css'
import Footer from '../../components/footer/Footer'
import Cateorgry from '../../components/navbarmenu/Cateorgry'
import Navbar from '../../components/navbar/Navbar'
import Product from '../../components/product/Product'
import Bottom from '../../components/Bottom/Bottom'
import Fproduct from '../../components/FeaturedProduct/Fproduct'

function Home() {
  return (
    <>
      <Navbar />
      <Cateorgry />



      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src="/images/1.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="/images/2.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="/images/4.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="/images/5.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="/images/3.png" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon prevNextBtn" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon prevNextBtn" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <div className="homepage">
        <div className='container my-4 py-4'>
          <h2 className='text-center mb-3 Featuredtittle'>Electronics</h2>
          <div className="row d-flex justify-content-between gg">
            <Fproduct imgUrl={'https://rukminim1.flixcart.com/image/200/200/ktop5e80/computer/f/p/w/km513ua-l503ts-thin-and-light-laptop-asus-original-imag6yt6ftegd5bx.jpeg?q=70'} />
            <Fproduct imgUrl={'https://rukminim1.flixcart.com/image/200/200/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70'} />
            <Fproduct imgUrl={'https://rukminim1.flixcart.com/image/200/200/ksxjs7k0/tablet/n/j/b/rmp2102-realme-original-imag6e3assqyqhfa.jpeg?q=70'} />
            <Fproduct imgUrl={'https://rukminim1.flixcart.com/image/200/200/ku5ufm80/monitor/y/6/b/v226hql-full-hd-um-wv6si-g01-acer-original-imag7ch4hf3mjfev.jpeg?q=70'} />
          </div>
        </div>
        <div className='container my-4 pb-4'>
          <h2 className='text-center mb-3 Featuredtittle'>Fashion</h2>
          <div className="row d-flex justify-content-between gg">
            <Fproduct imgUrl={'/images/img2.jpg'} />
            <Fproduct imgUrl={'/images/img3.jpg'} />
            <Fproduct imgUrl={'/images/img4.jpg'} />
            <Fproduct imgUrl={'/images/img6.jpg'} />
          </div>
        </div>
        <div className='container my-4 pb-4 mb-4'>
          <h2 className='text-center mb-3 Featuredtittle'>Footweres</h2>
          <div className="row d-flex justify-content-between gg">
          <Fproduct imgUrl={'/images/img9.jpg'} />
          <Fproduct imgUrl={'/images/img10.jpg'} />
          <Fproduct imgUrl={'/images/img1.jpg'} />
          <Fproduct imgUrl={'/images/img8.jpg'} />
          </div>
        </div>
      </div>
      <Footer />
      <Bottom />
    </>
  )
}

export default Home