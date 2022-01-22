'use strict';

const promiseDelay = require('z/situations/wait')
const fetch = require('undici').fetch

// Promise.race and how not to timeout promises

// Uncomment this and run to understand how measuring works
// console.time('delay')
// promiseDelay(100).then(()=>{
//     console.timeEnd('delay')
// })

console.time('fetching')
const fetching = fetch('https://naugtur.pl', { /* options */}).then((result)=>{
    console.timeEnd('fetching')
    return result.status
})
var timeoutPromise = promiseDelay(100).then(()=>{
    throw Error('too slow')
})

Promise.race([
    fetching,
    timeoutPromise
])
.then(console.log)
.catch(console.log)

// First, although the promise returned by Promise.race() will be fulfilled 
// as soon as the first of the given promises is settled, 
// the other promises are not cancelled and will keep on running. 
// The long-running task is never actually interrupted and stopped.

// Second, what happens to the timeout promise if the long-running task completes before the timeout is triggered? 
// The timer keeps running, and the promise will end up rejecting with an unhandled rejection
