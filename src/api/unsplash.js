import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID eb18daa264e6e65b38fa102d13bfa5866131f8500b2e137133c1b5029f571317'
    }
});