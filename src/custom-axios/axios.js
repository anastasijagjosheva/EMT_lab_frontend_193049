import axios from "axios";

const instance = axios.create({
    baseURL: 'https://emtlabfrontend193049.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*',

    }
})

export default instance;