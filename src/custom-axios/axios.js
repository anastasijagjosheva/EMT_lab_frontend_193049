import axios from "axios";

const instance = axios.create({
    baseURL: 'https://emtlabbackend193049.herokuapp.com/api/books',
    headers: {
        'Access-Control-Allow-Origin' : '*',

    }
})

export default instance;