import {React,useContext,useEffect,useState} from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import HomeIcon from '@mui/icons-material/Home';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EcartContext from '../../context/CartContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../config';

const host = "http://localhost:5000/api/";

function ShippingAddress() {
    const navigate = useNavigate();
    const { scrolltoTopfun, cartQuantity, fetchusercart } = useContext(EcartContext);

    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [pincode, setpincode] = useState("");
    const [mobile, setmobile] = useState("");

    // function for save address
    const onsubmitfun=async(event)=>{
        event.preventDefault();
        try {
            const userId = window.localStorage.getItem('ecomuserid');
            const response = await axiosInstance.post('order/saveaddress',{name,address,pincode,mobile,userId});
            console.log(response.data);
            if(response.data.success){
                const addressId = response.data.id;
                navigate(`/shippingdetails/${addressId}`);
            }
        } catch (error) {
            console.log("error inside shipping address",error);
        }
    }

    // function for fetch address
    const fetchaddress =async()=>{
        try {
            const id = window.localStorage.getItem('ecomuserid');
            // const response = await axios.get('order/fetchaddress/'+id);
            console.log("id is",id);
            const response = await axiosInstance('order/fetchaddress/'+id,{"addressId":0});
            if(response.data.success){
                const detail = response.data.address;
                setname(detail.name);
                setaddress(detail.address);
                setpincode(detail.pincode);
                setmobile(detail.mobile);
            }
        } catch (error) {
            console.log("inside fetchaddress",error);
        }
    }

    useEffect(() => {
        if(cartQuantity==0)
        {
            navigate('/');
        }
        fetchaddress();
        scrolltoTopfun();
    }, []);

    useEffect(() => {
        if (window.localStorage.getItem('ecomuserid')) {
            fetchusercart();
        }
    }, [])
     
    return (
        <>
            <Navbar />

            <div className="shippingProgress">
                <div className="stage">
                    <AddLocationAltIcon style={{ color: 'orangered' }} />
                    <span style={{ color: 'orangered' }}>Address</span>
                </div>
                <div className="fgb"></div>
                <div className="stage">
                    <LocalShippingIcon />
                    <span className=''>Order Summary</span>
                </div>
                <div className="fgb"></div>
                <div className="stage">
                    <AccountBalanceIcon />
                    <span className=''>Payment</span>
                </div>
            </div>


            <div className="paymentpage">
                <div className="cardinfo mt-0">
                    <h2 className='text-center mb-4'>Shipping Details</h2>
                    <form onSubmit={onsubmitfun}>
                        <div className="cardInput"><PersonIcon className='me-2' /><input required minLength={3} maxLength={20} value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder='Name' /></div>
                        <div className="cardInput"><HomeIcon className='me-2' /><input required minLength={5}  value={address} onChange={(e)=>{setaddress(e.target.value)}} type="text" placeholder='Address' /></div>
                        <div className="cardInput"><PinDropIcon className='me-2' /><input required minLength={6} maxLength={6} value={pincode} onChange={(e)=>{setpincode(e.target.value)}} type="text" placeholder='Pin Code' /></div>
                        <div className="cardInput"><PhoneIcon className='me-2' /><input required minLength={10} maxLength={10} pattern="[0-9]{10}" value={mobile} onChange={(e)=>{setmobile(e.target.value)}} type="tel" placeholder='Mobile Number' /></div>
                        <button type='submit' className='orderBtn mt-0'>Continue</button>
                    </form>
                </div>
            </div>
            <Footer />
            <Bottom />
        </>
    )
}

export default ShippingAddress