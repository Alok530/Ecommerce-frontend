import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Bottom from '../../components/Bottom/Bottom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './adminorders.css';

function Adminorders() {
    const [id, setid] = useState("62a47863937ce1af55fad9ca");
    return (
        <>
            <div className="dashboardpage">
                <div className="dashboard">
                <h2 className='fw-bolder mt-4'>All Orders</h2>
                    <table className="table table-striped ordertable">
                        <thead>
                            <tr style={{'backgroundColor':'rgb(255, 63, 127)','color':'white'}}>
                                <th scope="col">Order Id</th>
                                <th scope="col">Status</th>
                                <th id='tableId' scope="col">Amount</th>
                                <th id='' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">{id.slice(0,10)}</td>
                                <td style={{'color':'red'}}>Processing</td>
                                <td id='tableId'>599.0</td>
                                <td id=''><Link to={'/admin/shiping/order'} style={{'color':'black'}}><i className="bi bi-pencil-fill"></i></Link></td>
                            </tr>
                            <tr>
                                <td scope="row">{id.slice(0,10)}</td>
                                <td style={{'color':'red'}}>Processing</td>
                                <td id='tableId'>599.0</td>
                                <td id=''><Link to={'/admin/shiping/order'} style={{'color':'black'}}><i className="bi bi-pencil-fill"></i></Link></td>
                            </tr>
                            <tr>
                                <td scope="row">{id.slice(0,10)}</td>
                                <td style={{'color':'red'}}>Processing</td>
                                <td id='tableId'>599.0</td>
                                <td id=''><Link to={'/admin/shiping/order'} style={{'color':'black'}}><i className="bi bi-pencil-fill"></i></Link></td>
                            </tr>
                            <tr>
                                <td scope="row">{id.slice(0,10)}</td>
                                <td style={{'color':'red'}}>Processing</td>
                                <td id='tableId'>599.0</td>
                                <td id=''><Link to={'/admin/shiping/order'} style={{'color':'black'}}><i className="bi bi-pencil-fill"></i></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Adminorders;