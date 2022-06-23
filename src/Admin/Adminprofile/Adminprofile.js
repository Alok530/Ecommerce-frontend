import React from 'react';
import './adminprofile.css';

function Adminprofile() {
    return (
        <>
            <div className="adminprofilepage">
                <div className="adminprofilediv">
                    <div className="card profilecard">
                        <div className="card-header text-center fw-bold" style={{'backgroundColor':'rgb(255, 63, 127)','color':'white'}}>
                            ShopName
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <spam className='fw-bold'>Owner Name : </spam>
                                <span>  Alok Kumar</span>
                            </li>
                            <li className="list-group-item">
                                <spam className='fw-bold'>Email : </spam>
                                <span>  alok@gmail.com</span>
                            </li>
                            <li className="list-group-item">
                                <spam className='fw-bold'>Mobile No : </spam>
                                <span>  7273627368</span>
                            </li>
                            <li className="list-group-item" style={{'borderBottom':'1px solid black'}}>
                                <spam className='fw-bold'>Address : </spam>
                                <span>  H-10,Budha Colony, Patna-Bihar</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminprofile