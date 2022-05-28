import React from 'react'
import { Link } from 'react-router-dom';
import './error.css';

function Errorpage() {
    return (
        <>
            <div className="errorpage">
                <div className="error">
                    <h2>404-Error, Page Not Found</h2>
                    <Link to={'/'} style={{'textDecoration':'none'}}><button>Go to Home Page</button></Link>
                </div>
            </div>
        </>
    )
}

export default Errorpage;