'use strict';

const promiseDelay = require('situations/wait')
const makeMeASandwich = require('./02.chains')

//order a sandwich, but don't wait longer than 100ms
// edit 02.chains to export a sandwich making function and don't change anything here

// Uncomment this and run to understand how measuring works
// console.time('delay')
// promiseDelay(100).then(()=>{
//     console.timeEnd('delay')
// })

console.time('sandwich')
var sandwich = makeMeASandwich().then((sn)=>{
    console.timeEnd('sandwich')
    return sn
})
var timeoutPromise = promiseDelay(130).then(()=>{throw Error('too slow')})

Promise.all([
    sandwich,
    timeoutPromise
])
.then(console.log)
.catch(console.log)
