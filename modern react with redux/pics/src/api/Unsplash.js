import axios from 'axios';

export default axios.create({
    headers: {
        Authorization: 'Client-ID 73aa043d5a2dcc0c1d744e26d781745897ca2b317e6dad9ffb5668695c494b7b',
    },
    baseURL:'https://api.unsplash.com',
});