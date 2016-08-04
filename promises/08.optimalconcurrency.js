'use strict';

//this one uses bluebird
//run npm install bluebird inside promises directory

const p = require('bluebird')
const someWorker = require('situations/someWorker')

const workerPromises = [
    someWorker({createDelay:100,doWorkDelay:10}),
    someWorker({createDelay:10,doWorkDelay:100})
]

console.log("this should take ~110ms not 200ms")
console.time("flow")

p.all(workerPromises)
.then((workers)=>{
    const workPromises = workers.map((worker)=>worker.doWork())
    return p.all(workPromises)
})
.then((results)=>{
    console.timeEnd("flow")
    console.log(results)
})
