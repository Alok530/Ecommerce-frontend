import React,{useState} from 'react';
import Bottom from '../Bottom/Bottom';
import Footer from '../../components/footer/Footer';
import './allproduct.css';

function Allreview() {
    const [id, setid] = useState("62a47863937ce1af55fad9ca");
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
                                <th id='' scope="col">Stock</th>
                                <th id='tableId' scope="col">Price</th>
                                <th id='' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">{id.slice(0,10)}</td>
                                <td id='tableId'>Biskit</td>
                                <td id=''>5</td>
                                <td id='tableId'>599.0</td>
                                <td id=''><i className="bi bi-pencil-fill"></i></td>
                            </tr>
                            <tr>
                                <td scope="row">{id.slice(0,10)}</td>
                                <td id='tableId'>Biskit</td>
                                <td id=''>5</td>
                                <td id='tableId'>599.0</td>
                                <td id=''><i className="bi bi-pencil-fill"></i></td>
                            </tr>
                            <tr>
                                <td scope="row">{id.slice(0,10)}</td>
                                <td id='tableId'>Biskit</td>
                                <td id='tableId'>5</td>
                                <td id='tableId'>599.0</td>
                                <td id=''><i className="bi bi-pencil-fill"></i></td>
                            </tr>
                            <tr>
                                <td scope="row">{id.slice(0,10)}</td>
                                <td id='tableId'>Biskit</td>
                                <td id=''>5</td>
                                <td id='tableId'>599.0</td>
                                <td id=''><i className="bi bi-pencil-fill"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Allreview;