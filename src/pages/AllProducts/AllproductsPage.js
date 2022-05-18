import React from 'react'
import './allproducts.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Fproduct from '../../components/FeaturedProduct/Fproduct'
import { useState } from 'react'
import Item from '../../components/ProductItem/Item'
import Bottom from '../../components/Bottom/Bottom'
import products from '../../products';

function AllproductsPage() {
    const [inputval, setinputval] = useState(1);
    const [filtter, setfiltter] = useState("");
    const [onclickClass, setonclickClass] = useState("");
    const [line, setline] = useState("");
    return (
        <>
            <Navbar />
            <div className="allproductPage">
                <div className="fillter">
                    <div className="fillterDiv">
                        <div className="d-flex justify-content-between mb-1">
                            <h5 className='fw-bold my-0'>Filters</h5>
                            <h6 className='my-0' onClick={()=>{setfiltter("");setonclickClass("")}} style={{'cursor':'pointer','color':'blue'}}>Clear All</h6>
                        </div>
                        <hr className='mt-0 mb-3'/>
                        <h5>Categories</h5>
                        <ul style={{ 'listStyle': 'none', 'paddingLeft': '10px','cursor':'pointer' }}>
                            <li className={line==1?onclickClass:''} onClick={()=>{setfiltter("");setonclickClass("filtterselect");setline(1)}}>All</li>
                            <li className={line==2?onclickClass:''} onClick={()=>{setfiltter("laptop");setonclickClass("filtterselect");setline(2)}}>Laptop</li>
                            <li className={line==3?onclickClass:''} onClick={()=>{setfiltter("mobile");setonclickClass("filtterselect");setline(3)}}>Mobile</li>
                            <li className={line==4?onclickClass:''} onClick={()=>{setfiltter("footwear");setonclickClass("filtterselect");setline(4)}}>Footwear</li>
                            <li className={line==5?onclickClass:''} onClick={()=>{setfiltter("cloths");setonclickClass("filtterselect");setline(5)}}>Cloths</li>
                            <li className={line==6?onclickClass:''} onClick={()=>{setfiltter("tshirt");setonclickClass("filtterselect");setline(6)}}>T-shirt</li>
                            <li className={line==7?onclickClass:''} onClick={()=>{setfiltter("computer");setonclickClass("filtterselect");setline(7)}}>Computers</li>
                            <li className={line==8?onclickClass:''} onClick={()=>{setfiltter("tablet");setonclickClass("filtterselect");setline(8)}}>Tablet</li>
                        </ul>
                        <h5 for="customRange3" className="form-label">Product Ratting</h5>
                        <input type="range" onChange={() => { setinputval(inputval) }} className="form-range" min="1" max="5" step="0.5" id="customRange3"></input>
                        <h5 for="customRange3" className="form-label">Products Price</h5>
                        <input type="range" onChange={() => { setinputval(inputval) }} className="form-range" min="1" max="5" step="0.5" id="customRange3" form-range-track-height={'1px'}></input>
                        <h1>{ }</h1>
                    </div>
                </div>
                <div className="products">
                    <h2 className='text-center mb-1'>Products</h2>
                    <div className="row">
                    {
                        products.map((item)=>{
                            return <Item key={item.id} item={item} cat={filtter}/>
                        })
                    }
                        {/*<Item itemUrl={'/images/img12.jpg'} />
                        <Item itemUrl={'/images/iPhone12.webp'} />
                        <Item itemUrl={'/images/img2.jpg'} />
                        <Item itemUrl={'/images/img4.jpg'} />
                        <Item itemUrl={'/images/HpLaptop.webp'} />
                        <Item itemUrl={'/images/img3.jpg'} />
                        <Item itemUrl={'/images/CanonCamera.webp'} />
                        <Item itemUrl={'/images/img1.jpg'} />
                        <Item itemUrl={'/images/img5.jpg'} />
                        <Item itemUrl={'/images/MacBook.webp'} />
                        <Item itemUrl={'/images/img6.jpg'} />
                        <Item itemUrl={'/images/SonyLens.webp'} />
                        <Item itemUrl={'/images/img8.jpg'} />
                        <Item itemUrl={'/images/img7.jpg'} />
                        <Item itemUrl={'/images/laptop.webp'} />
                        <Item itemUrl={'/images/img11.jpg'} />
                        <Item itemUrl={'/images/SonyCamera.webp'} />
                        <Item itemUrl={'/images/img9.jpg'} />
                        <Item itemUrl={'/images/img10.jpg'} />
                        <Item itemUrl={'/images/lenvoLaptop.webp'} />*/}
                    </div>
                </div>
            </div>
            <Footer />
            <Bottom />
        </>
    )
}

export default AllproductsPage