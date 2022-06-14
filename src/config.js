import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://ecommerce-websites.herokuapp.com/api/",
})

export default axiosInstance;