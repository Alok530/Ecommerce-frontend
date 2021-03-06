import { React, useContext, useEffect, useState } from 'react';
import Bottom from '../../components/Bottom/Bottom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './profile.css'
import ShopIcon from '@mui/icons-material/Shop';
import KeyIcon from '@mui/icons-material/Key';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import EcartContext from '../../context/CartContext';
import Skeleton from '../../components/Skeleton/Skeleton';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../config';

const host = "http://localhost:5000/api/";

function Profile() {
    const navigate = useNavigate();
    const { scrolltoTopfun } = useContext(EcartContext);
    const [currentuser, setcurrentuser] = useState({});

    // for fetch current user
    const fetchcurrentuserfun = async () => {
        if (window.localStorage.getItem('ecomuserid')) {
            try {
                const id = window.localStorage.getItem('ecomuserid');
                const response = await axiosInstance.get(`auth/getuser/${id}`);
                if (!response.data.success) {
                    navigate('/error');
                }
                const user = response.data.user;
                setcurrentuser({
                    'username': user.username,
                    'email': user.email,
                    'gender': user.gender,
                    'mobile': user.mobile,
                });
            } catch (error) {
                console.log("Inside fetchuserfun", error);
            }
        }
    }

    useEffect(() => {
        scrolltoTopfun();
        fetchcurrentuserfun();
    }, []);

    const logoutfun = () => {
        const want = window.confirm('Do you want to logout');
        if (want) {
            window.localStorage.removeItem("ecomuserid");
            navigate('/login');
        }
    }

    return (
        <>
            <Navbar />
            {window.localStorage.getItem('ecomuserid') ? <div className="profilepage">
                <div className="profile">
                    {currentuser == "" ? <Skeleton /> : <>
                        <div className="profilePic mb-3">
                            {currentuser.gender=="Male"?<img src="/images/boyface.jpg" />:<img src="/images/girlface.png" />}
                        </div>
                        <div className="profiledesc">
                            <span className='fw-bold'>Name : </span><span> {currentuser.username}</span>
                            <br />
                            <hr className='hr' />
                            <span className='fw-bold'>Phone : </span><span> 91+ {currentuser.mobile}</span>
                            <br />
                            <hr className='hr' />
                            <span className='fw-bold'>Email : </span><span> {currentuser.email}</span>
                            <br />
                            <hr className='hr' />
                            <span className='fw-bold'>Gender : </span><span> {currentuser.gender}</span>
                            <br />
                            <hr className='hr' />
                        </div>
                        <Link to={'/updateprofile'} style={{ width: '100%' }}><button className='orderBtn'>Edit Profile</button></Link>
                    </>}
                </div>
                <div className="profilebuttom">
                    <Link className='settingLink' to={'/myorder'} style={{ 'textDecoration': 'none', color: 'black' }}><div className="setting">
                        <div className="settingpic me-2">
                            <ShopIcon style={{ 'fontSize': '54px' }} />
                        </div>
                        <div className="settingdesc">
                            <h5>Your Orders</h5>
                            <span>Track, Return or Buy</span>
                        </div>
                    </div></Link>
                    <Link className='settingLink' to={'/updatepassword'} style={{ 'textDecoration': 'none', color: 'black' }}><div className="setting">
                        <div className="settingpic me-2">
                            <KeyIcon style={{ 'fontSize': '54px' }} />
                        </div>
                        <div className="settingdesc">
                            <h5>Security</h5>
                            <span>Change account password</span>
                        </div>
                    </div></Link>
                    <div className='settingLink' onClick={() => { logoutfun() }} style={{ 'textDecoration': 'none', color: 'black' }}><div className='setting'>
                        <div className="settingpic me-2">
                            <LogoutIcon style={{ 'fontSize': '54px' }} />
                        </div>
                        <div className="settingdesc">
                            <h5>Logout</h5>
                            <span>Return back</span>
                        </div>
                    </div></div>
                </div>
            </div> :
                <div className="profilepage">
                    <NoAccountsIcon style={{ 'fontSize': '50px', color: 'black' }} />
                    <h2 id='temp' className='fw-bold'>You are not login</h2>
                    <Link to={'/login'}><button className='EmptyCartDivBtn mt-0'>Login Now</button></Link>
                </div>
            }
            <Footer />
            <Bottom />
        </>
    )
}

export default Profile