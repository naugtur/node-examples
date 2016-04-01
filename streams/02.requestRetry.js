'use strict';

//npm install request
const request = require('request')

function tryFetchingHttp(callback) {
    return (Math.random() > 0.5) ?
        request('http://www.mocky.io/v2/56fae5d3100000920a68789d', callback) :
        request('http://i0.kym-cdn.com/photos/images/newsfeed/000/096/044/trollface.jpg', callback)
}

//make it retry when failed
require('http').createServer((req, res) => {
    const request = tryFetchingHttp((err, response) => {
        console.log(err, response.statusCode)
    })
    request.pipe(res)

}).listen(1337)
