import axios from 'axios';

const getAxiosClient = () => axios.create({
    baseURL: 'https://fedtest.bylith.com/api/',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
    },
});

export default getAxiosClient;
