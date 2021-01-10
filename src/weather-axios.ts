import axios from 'axios';

export const instance = axios.create({
    baseURL: 'api.openweathermap.org/data/2.5/forecast',
    params: {
        q: 'Bogota,CO',
        appid: 'bc7205cf2b3bad38e6099d15a04d1531'
    }
});