import React from 'react'
import './navmenu.css'
import { Link } from 'react-router-dom'

function cateorgry() {
    return (
        <>
            <div className="navcategories">
                <div className="navcategoriesDiv">
                    <div className="dropdown">
                        <span data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item" to="/products">All</Link></li>
                            <li><Link className="dropdown-item" to="/products">Laptop</Link></li>
                            <li><Link className="dropdown-item" to="/products">Mobile</Link></li>
                            <li><Link className="dropdown-item" to="/products">Footwears</Link></li>
                            <li><Link className="dropdown-item" to="/products">T-Shirt</Link></li>
                            <li><Link className="dropdown-item" to="/products">Shirt</Link></li>
                        </ul>
                    </div>
                    <span>Fashion</span>
                    <span>Electronics</span>
                    <span>Footwears</span>
                </div>
            </div>
        </>
    )
}

export default cateorgry