import axios from "axios";

const instance = axios.create({
    baseURL: 'https://emtlabbackend193049.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*',

    }
})

export default instance;