import React from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './profile.css'
import ShopIcon from '@mui/icons-material/Shop';
import KeyIcon from '@mui/icons-material/Key';
import LogoutIcon from '@mui/icons-material/Logout';

function Profile() {
    return (
        <>
            <Navbar />
            <div className="profilepage">
                <div className="profile">
                    <div className="profilePic mb-3">
                        <img src="/images/img5.jpg" />
                    </div>
                    <div className="profiledesc">
                        <span className='fw-bold'>Name : </span><span> Alok Kumar Rai</span>
                        <br />
                        <hr className='hr' />
                        <span className='fw-bold'>Phone : </span><span> 91+ 7321015099</span>
                        <br />
                        <hr className='hr' />
                        <span className='fw-bold'>Email : </span><span> alok@gmail.com</span>
                        <br />
                        <hr className='hr' />
                        <span className='fw-bold'>Gender : </span><span> Male</span>
                    </div>
                    <button className='orderBtn'>Edit Profile</button>
                </div>
                <div className="profilebuttom">
                    <div className="setting">
                        <div className="settingpic me-2">
                            <ShopIcon style={{'fontSize':'54px'}}/>
                        </div>
                        <div className="settingdesc">
                            <h5>Your Orders</h5>
                            <span>Track, Return or Buy</span>
                        </div>
                    </div>
                    <div className="setting">
                        <div className="settingpic me-2">
                            <KeyIcon style={{'fontSize':'54px'}}/>
                        </div>
                        <div className="settingdesc">
                            <h5>Security</h5>
                            <span>Change account password</span>
                        </div>
                    </div>
                    <div className="setting">
                        <div className="settingpic me-2">
                            <LogoutIcon style={{'fontSize':'54px'}}/>
                        </div>
                        <div className="settingdesc">
                            <h5>Logout</h5>
                            <span>Return back</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Bottom />
        </>
    )
}

export default Profile