import React from 'react'
import './allproducts.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Fproduct from '../../components/FeaturedProduct/Fproduct'
import { useState, useContext, useEffect } from 'react'
import Item from '../../components/ProductItem/Item'
import Bottom from '../../components/Bottom/Bottom'
import products from '../../products';
import EcartContext from '../../context/CartContext';
import SearchIcon from '@mui/icons-material/Search';
import Slider from '@mui/material/Slider';

function AllproductsPage() {
    const [items, setitems] = useState(products);

    const { scrolltoTopfun } = useContext(EcartContext);
    const [inputval, setinputval] = useState(1);
    const [filtter, setfiltter] = useState("");
    const [onclickClass, setonclickClass] = useState("");
    const [line, setline] = useState("");

    const [qyery, setqyery] = useState("");
    console.log(qyery);

    const [ratting, setratting] = useState(0);
    const [filterprice, setfilterprice] = useState(75000);
    const changeValue = (event, value) => {
        setratting(value);
    };
    const changeValue2 = (event, value) => {
        setfilterprice(value);
    };
    console.log("ratting val", ratting, filterprice);



    const searchfun = (data) => {
        return data.filter(
            (item) =>
                item.tittle.includes("TV")
        );
    }
    // console.log(products.filter((item)=>item.tittle.toLowerCase().includes(qyery.toLowerCase())));

    useEffect(() => {
        scrolltoTopfun();
    }, [])

    const [sortbutton, setsortbutton] = useState(0);
    const [filterbutton, setfilterbutton] = useState(0);
    const controlfilterButton = () => {
        if (filterbutton == 1) {
            setfilterbutton(0);
        } else {
            setfilterbutton(1);
        }
        setsortbutton(0);
    }
    const controlSortButton = () => {
        if (sortbutton == 1) {
            setsortbutton(0);
        } else {
            setsortbutton(1);
        }
        setfilterbutton(0);
    }


    //------------------****************--------------
    const [popularity, setpopularity] = useState(0);
    const [lowtohigh, setlowtohigh] = useState(0);
    const [hightolow, sethightolow] = useState(0);
    const [sortingstatus, setsortingstatus] = useState(0);

    const sortfun = (sortCriteria) => {
        // setsortStatus(1);
        products.sort(function (a, b) {
            if (sortCriteria === 'price')
                return a.price - b.price;
            else
                if (sortCriteria === 'ratting')
                    return b.ratting - a.ratting;
                else if(hightolow)
                    return b.price - a.price;
        });
        const temp = products;
        setsortingstatus(1);
        setitems(temp);
    }

    useEffect(() => {
      if(lowtohigh){
        sortfun('price');
      }
    }, [lowtohigh])

    useEffect(() => {
        if(popularity){
          sortfun('ratting');
        }
    }, [popularity])

    useEffect(() => {
        if(hightolow){
          sortfun('hightolow');
        }
    }, [hightolow])
    

    return (
        <>
            <Navbar />
            <div className='filterSortingBtn'>
                <div className="filterBtn" style={{ 'borderLeft': 'none', 'borderTop': 'none' }} onClick={() => { controlSortButton() }}>
                    <span>Sorting</span>
                </div>
                <div className="filterBtn" style={{ 'borderTop': 'none', 'borderRight': 'none' }} onClick={() => { controlfilterButton() }}>
                    <span>Filter</span>
                </div>
            </div>
            <div className="filterSorting">
                {filterbutton ? <div className="itemfilter">
                    <div className="d-flex justify-content-between mb-1">
                        <h5 className='fw-bold my-0'>Filters</h5>
                        <h6 className='my-0' onClick={() => { setfiltter(""); setonclickClass(""); setratting(0); setfilterprice(75000); }} style={{ 'cursor': 'pointer', 'color': 'blue' }}>Clear All</h6>
                    </div>
                    <hr className='mt-0 mb-1' />
                    <h5>Categories</h5>
                    <ul style={{ 'listStyle': 'none', 'paddingLeft': '10px', 'cursor': 'pointer' }}>
                        <li className={line == 1 ? onclickClass : ''} onClick={() => { setfiltter(""); setonclickClass("filtterselect"); setline(1) }}>All</li>
                        <li className={line == 2 ? onclickClass : ''} onClick={() => { setfiltter("laptop"); setonclickClass("filtterselect"); setline(2) }}>Laptop</li>
                        <li className={line == 3 ? onclickClass : ''} onClick={() => { setfiltter("mobile"); setonclickClass("filtterselect"); setline(3) }}>Mobile</li>
                        <li className={line == 4 ? onclickClass : ''} onClick={() => { setfiltter("footwear"); setonclickClass("filtterselect"); setline(4) }}>Footwear</li>
                        <li className={line == 5 ? onclickClass : ''} onClick={() => { setfiltter("cloths"); setonclickClass("filtterselect"); setline(5) }}>Cloths</li>
                        <li className={line == 6 ? onclickClass : ''} onClick={() => { setfiltter("tshirt"); setonclickClass("filtterselect"); setline(6) }}>T-shirt</li>
                        <li className={line == 7 ? onclickClass : ''} onClick={() => { setfiltter("computer"); setonclickClass("filtterselect"); setline(7) }}>Computers</li>
                        <li className={line == 8 ? onclickClass : ''} onClick={() => { setfiltter("tablet"); setonclickClass("filtterselect"); setline(8) }}>Tablet</li>
                    </ul>
                    <h5 for="customRange3" className="form-label">Product Ratting</h5>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={0}
                        onChange={changeValue}
                        value={ratting}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={5}
                    />
                    <h5 for="customRange3" className="form-label">Products Price</h5>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={75000}
                        onChange={changeValue2}
                        value={filterprice}
                        valueLabelDisplay="auto"
                        step={10000}
                        marks
                        min={1000}
                        max={75000}
                    />
                    <button onClick={() => { setsortbutton(0); setfilterbutton(0); }} className="applyBtn">Apply</button>
                </div> : ''}
                {sortbutton ? <div className="itemfilter">
                    <div className="d-flex justify-content-between mb-1">
                        <h5 className='fw-bold my-0'>Sortings</h5>
                        <h6 className='my-0' onClick={() => {setsortingstatus(0); setpopularity(0); setlowtohigh(0); sethightolow(0); setline(0)}} style={{ 'cursor': 'pointer', 'color': 'blue' }}>Clear All</h6>
                    </div>
                    <hr className='mt-0 mb-2' />
                    <h5>Sort By</h5>
                    <ul style={{ 'listStyle': 'none', 'paddingLeft': '10px', 'cursor': 'pointer' }}>
                        <li className={line == 1 ? onclickClass : ''} onClick={() => { setpopularity(1); setlowtohigh(0); sethightolow(0); setonclickClass("filtterselect"); setline(1) }}>Popularity</li>
                        <li className={line == 2 ? onclickClass : ''} onClick={() => { setlowtohigh(1); setpopularity(0); sethightolow(0);setonclickClass("filtterselect"); setline(2) }}>Price -- Low to High</li>
                        <li className={line == 3 ? onclickClass : ''} onClick={() => { sethightolow(1); setpopularity(0); setlowtohigh(0); setonclickClass("filtterselect"); setline(3) }}>Price -- High to Low</li>
                    </ul>
                    <button onClick={() => { setsortbutton(0); setfilterbutton(0); }} className="applyBtn">Apply</button>
                </div> 
                : ''}
            </div>
            {(filterbutton == 0 && sortbutton == 0) ? <div className="allproductPage">
                <div className="fillter">
                    <div className="fillterDiv">
                        <div className="d-flex justify-content-between mb-1">
                            <h5 className='fw-bold my-0'>Filters</h5>
                            <h6 className='my-0' onClick={() => { setfiltter(""); setonclickClass(""); setratting(0); setfilterprice(75000); }} style={{ 'cursor': 'pointer', 'color': 'blue' }}>Clear All</h6>
                        </div>
                        <hr className='mt-0 mb-3' />
                        <h5>Categories</h5>
                        <ul style={{ 'listStyle': 'none', 'paddingLeft': '10px', 'cursor': 'pointer' }}>
                            <li className={line == 1 ? onclickClass : ''} onClick={() => { setfiltter(""); setonclickClass("filtterselect"); setline(1) }}>All</li>
                            <li className={line == 2 ? onclickClass : ''} onClick={() => { setfiltter("laptop"); setonclickClass("filtterselect"); setline(2) }}>Laptop</li>
                            <li className={line == 3 ? onclickClass : ''} onClick={() => { setfiltter("mobile"); setonclickClass("filtterselect"); setline(3) }}>Mobile</li>
                            <li className={line == 4 ? onclickClass : ''} onClick={() => { setfiltter("footwear"); setonclickClass("filtterselect"); setline(4) }}>Footwear</li>
                            <li className={line == 5 ? onclickClass : ''} onClick={() => { setfiltter("cloths"); setonclickClass("filtterselect"); setline(5) }}>Cloths</li>
                            <li className={line == 6 ? onclickClass : ''} onClick={() => { setfiltter("tshirt"); setonclickClass("filtterselect"); setline(6) }}>T-shirt</li>
                            <li className={line == 7 ? onclickClass : ''} onClick={() => { setfiltter("computer"); setonclickClass("filtterselect"); setline(7) }}>Computers</li>
                            <li className={line == 8 ? onclickClass : ''} onClick={() => { setfiltter("tablet"); setonclickClass("filtterselect"); setline(8) }}>Tablet</li>
                        </ul>
                        <h5 for="customRange3" className="form-label">Product Ratting</h5>
                        <Slider
                            aria-label="Temperature"
                            defaultValue={0}
                            onChange={changeValue}
                            value={ratting}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={0}
                            max={5}
                        />
                        <h5 for="customRange3" className="form-label">Products Price</h5>
                        <Slider
                            aria-label="Temperature"
                            defaultValue={75000}
                            onChange={changeValue2}
                            value={filterprice}
                            valueLabelDisplay="auto"
                            step={10000}
                            marks
                            min={1000}
                            max={75000}
                        />
                    </div>
                </div>
                <div className="products">
                    <h2 className='text-center mb-1'>Products</h2>
                    <div className="my-3 searchBox" style={{ 'textAlign': 'center' }}>
                        <input className='searchBoxInput' type="text" value={qyery} placeholder="Search for products.." onChange={(e) => { setqyery(e.target.value) }} />
                        <SearchIcon />
                    </div>
                    <div className="row">
                        {
                            qyery === "" && products.map((item) => {
                                return <Item key={item.id} item={item} cat={filtter} ratting={ratting} filterprice={filterprice} />
                            })
                        }
                        {
                            qyery !== "" && (items.filter((item) => item.tittle.toLowerCase().includes(qyery.toLowerCase()))).map((item) => {
                                return <Item key={item.id} item={item} cat={filtter} ratting={ratting} filterprice={filterprice} />
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
            </div> : ''}
            <Footer />
            <Bottom />
        </>
    )
}

export default AllproductsPage