import React from 'react';
import Bottom from '../Bottom/Bottom';
import Footer from '../../components/footer/Footer';
import './allproduct.css';

function Allreview() {
    return (
        <>
            <div className="adminallproductpage">
                <div className="dashboard">
                    <h2 className='fw-bolder mt-4'>All Products</h2>
                    <table className="table table-striped ordertable">
                        <thead>
                            <tr style={{ 'backgroundColor': 'rgb(255, 63, 127)', 'color': 'white' }}>
                                <th scope="col">Product Id</th>
                                <th id='tableId' scope="col">Name</th>
                                <th id='tableId' scope="col">Stock</th>
                                <th id='tableId' scope="col">Price</th>
                                <th id='tableId' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1374jdhf3748</td>
                                <td id='tableId'>Biskit</td>
                                <td id='tableId'>5</td>
                                <td id='tableId'>599.0</td>
                                <td id='tableId'><i className="bi bi-pencil-fill"></i></td>
                            </tr>
                            <tr>
                                <td scope="row">1374jdhf3748</td>
                                <td id='tableId'>Biskit</td>
                                <td id='tableId'>5</td>
                                <td id='tableId'>599.0</td>
                                <td id='tableId'><i className="bi bi-pencil-fill"></i></td>
                            </tr>
                            <tr>
                                <td scope="row">1374jdhf3748</td>
                                <td id='tableId'>Biskit</td>
                                <td id='tableId'>5</td>
                                <td id='tableId'>599.0</td>
                                <td id='tableId'><i className="bi bi-pencil-fill"></i></td>
                            </tr>
                            <tr>
                                <td scope="row">1374jdhf3748</td>
                                <td id='tableId'>Biskit</td>
                                <td id='tableId'>5</td>
                                <td id='tableId'>599.0</td>
                                <td id='tableId'><i className="bi bi-pencil-fill"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Allreview;