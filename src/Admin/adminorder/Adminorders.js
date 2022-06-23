import React from 'react';
import { Link } from 'react-router-dom';
import Bottom from '../../components/Bottom/Bottom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './adminorders.css';

function Adminorders() {
    return (
        <>
            <div className="dashboardpage">
                <div className="dashboard">
                <h2 className='fw-bolder mt-4'>All Orders</h2>
                    <table className="table table-striped ordertable">
                        <thead>
                            <tr style={{'backgroundColor':'rgb(255, 63, 127)','color':'white'}}>
                                <th scope="col">Order Id</th>
                                <th id='tableId' scope="col">Status</th>
                                <th id='tableId' scope="col">Amount</th>
                                <th id='tableId' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1374jdhf3748</td>
                                <td id='tableId' style={{'color':'red'}}>Processing</td>
                                <td id='tableId'>599.0</td>
                                <td id='tableId'><Link to={'/admin/shiping/order'}><i className="bi bi-pencil-fill"></i></Link></td>
                            </tr>
                            <tr>
                                <td scope="row">1374jdhf3748</td>
                                <td id='tableId' style={{'color':'red'}}>Processing</td>
                                <td id='tableId'>599.0</td>
                                <td id='tableId'><Link to={'/admin/shiping/order'}><i className="bi bi-pencil-fill"></i></Link></td>
                            </tr>
                            <tr>
                                <td scope="row">1374jdhf3748</td>
                                <td id='tableId' style={{'color':'red'}}>Processing</td>
                                <td id='tableId'>599.0</td>
                                <td id='tableId'><Link to={'/admin/shiping/order'}><i className="bi bi-pencil-fill"></i></Link></td>
                            </tr>
                            <tr>
                                <td scope="row">1374jdhf3748</td>
                                <td id='tableId' style={{'color':'red'}}>Processing</td>
                                <td id='tableId'>599.0</td>
                                <td id='tableId'><Link to={'/admin/shiping/order'}><i className="bi bi-pencil-fill"></i></Link></td>
                            </tr>
                            <tr>
                                <td scope="row">1374jdhf3748</td>
                                <td id='tableId' style={{'color':'red'}}>Processing</td>
                                <td id='tableId'>599.0</td>
                                <td id='tableId'><Link to={'/admin/shiping/order'}><i className="bi bi-pencil-fill"></i></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Adminorders;