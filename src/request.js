const axios = require('axios')


//create axios instance
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});


module.exports = instance