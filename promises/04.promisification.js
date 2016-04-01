'use strict';

//npm install request bluebird
const request = require('request')
const bluebird = require('bluebird')


//reference
request('http://www.mocky.io/v2/56fae5d3100000920a68789d', (err, response) => {
    console.log(1, response.statusCode)
})

//make this work:
promisifiedRequest('http://www.mocky.io/v2/56fae5d3100000920a68789d')
.then((response)=>{
    console.log(2, response.statusCode)
})


//and then make it fail the promise when http status is not 200
promisifiedRequest2('http://www.mocky.io/v2/56fae5d3100000920a68789d')
.catch((error)=>{
    console.log(3.1, error.message)
})

promisifiedRequest2('http://i0.kym-cdn.com/photos/images/newsfeed/000/096/044/trollface.jpg')
.then((response)=>{
    console.log(3.2, response.statusCode)
})
