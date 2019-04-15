'use strict';

//this one uses and advertises bluebird
//run npm install bluebird inside promises directory

const p = require('bluebird')
const someWorker = require('situations/someWorker')

// someWorker returns a promise that resolves in `createDelay` miliseconds
// resolved value is an object with .doWork function - when called it resolves in `doWorkDelay` miliseconds
// .doWork resolves with 'worker done!' value
const workerPromises = [
    someWorker({ createDelay: 100, doWorkDelay: 10 }),
    someWorker({ createDelay: 10, doWorkDelay: 100 })
]

console.log('this should take ~110ms not 200ms')
console.time('flow')

p.all(workerPromises)
    .then((workers) => {
        const workPromises = workers.map((worker) => worker.doWork())
        return p.all(workPromises)
    })
    .then((results) => {
        console.timeEnd('flow')
        console.log(results)
    })
