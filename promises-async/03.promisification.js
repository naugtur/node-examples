'use strict';

const dns = require('dns');

const util = require('util') // this is an important hint ;)

// reference
dns.lookup('example.com', (err, result) => {
    console.log(1.1, err, result)
})
dns.lookup('localhost', (err, result) => {
    console.log(1.2, err, result)
})
dns.lookup('bad.example.com', (err, result) => {
    console.log(1.3, err, result)
})

// Make this work:
const promisifiedLookup = "TODO";

// promisifiedLookup('example.com')
//     .then((response) => {
//         console.log(2, response.statusCode)
//     })


//and then make it fail the promise when domain resolves to 127.0.0.1
// const promisifiedLookup2 = ;

// promisifiedRequest2('localhost')
//     .catch((error) => {
//         console.log(3.1, error.message)
//     })

// promisifiedRequest2('example.com')
//     .then((response) => {
//         console.log(3.2, response)
//     })
//     .catch(console.log)


// Final task, get this promisified too:
const that = {
    data:1,
    meBadWithPromises(callback){
        return callback(null, this.data)
    }
}

const promisifiedMeBadWithPromises = "TODO";

// promisifiedMeBadWithPromises()  // should not fail