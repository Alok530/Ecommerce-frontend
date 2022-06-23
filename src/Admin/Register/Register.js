import React from 'react'
import Bottom from '../../components/Bottom/Bottom';
import Footer from '../footer/Footer';
import Navbar from '../adminnavbar/Navbar';
// import './sell.css';
import HomeIcon from '@mui/icons-material/Home';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

function Register() {
    return (
        <>
            <Navbar />
            <div className="sellpage" style={{'minHeight':'70vh'}}>
                <div className="sellform">
                    <h3 className='fw-bolder mb-2'>Register Your Shop</h3>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder='shop@gmail.com' />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Password</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder='*******' />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Mobile No</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="91+ 3434343434" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Shop Name</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="XYZ Shop" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Shop Adress</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn" style={{ 'backgroundColor': 'rgb(255, 63, 127)', 'color': 'white' }}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register;