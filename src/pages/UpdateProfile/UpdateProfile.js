import { React, useContext, useEffect, useState } from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EcartContext from '../../context/CartContext'
import Skeleton from '../../components/Skeleton/Skeleton';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const host = "http://localhost:5000/api/";

function UpdatePassword() {
    const navigate = useNavigate();
    const { scrolltoTopfun, currentuser, fetchcurrentuserfun } = useContext(EcartContext);

    const [username, setusername] = useState("");
    const [gender, setgender] = useState("");
    const [mobile, setmobile] = useState("");
    const [responseStatus, setresponseStatus] = useState(1);

    useEffect(() => {
        setusername(currentuser.username);
        setmobile(currentuser.mobile);
        setgender(currentuser.gender);
    }, [currentuser.username,currentuser.gender,currentuser.mobile]);

    useEffect(() => {
        fetchcurrentuserfun();
        scrolltoTopfun();
    }, []);

    const submitfun = async (event) => {
        event.preventDefault();
        console.log(username,mobile,gender);
        try {
            const id = window.localStorage.getItem('ecomuserid');
            const response = await axios.put(host+'auth/updateprofile/'+id,{username,gender,mobile});
            if(response.data.success){
                setresponseStatus(1);
                showTost(response.data.message);
                setTimeout(() => {
                    navigate('/account');
                }, 2000);
            }
        } catch (error) {

        }
    }

    const showTost = (message) => {
        toast.success(message, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    }

    return (
        <>
            <Navbar />
            <ToastContainer toastStyle={{ backgroundColor: responseStatus?"green":"red" }} />
            <div className="paymentpage">
                {currentuser !== {} ? <div className="cardinfo mt-4">
                    <h2 className='text-center mb-4'>Update Profile</h2>
                    <form onSubmit={submitfun}>
                        <div className="cardInput"><AccountCircleIcon className='me-2' /><input value={username} onChange={(e) => { setusername(e.target.value) }} type="text" placeholder='Full Name' /></div>
                        <div className="cardInput"><LocalPhoneIcon className='me-2' /><input type="tel" pattern="[0-9]{10}" minLength={10} maxLength={10} value={mobile} onChange={(e) => { setmobile(e.target.value) }} placeholder='Phone Number' /></div>
                        <div className="cardInput d-flex align-items-center justify-content-between">
                            <PeopleIcon />
                            <select onChange={(e)=>{const temp = e.target.value;
                                setgender(temp)}} value={gender} name="gender" required="true" className="form-select" style={{ border: 'none', 'margin': '-4px 0px', 'outline': 'none' }}>                            
                                <option selected>{gender}</option>
                                {gender==="Male"?"":<option value="Male">Male</option>}
                                {gender==="Female"?"":<option value="Female">Female</option>}
                                {gender==="Other"?"":<option value="Other">Other</option>}
                            </select>
                        </div>
                        <button type='submit' className='orderBtn mt-0'>Update</button>
                    </form>
                </div> : <Skeleton />}
            </div>
            <Footer />
            <Bottom />
        </>
    )
}

export default UpdatePassword;