// run node --require debugging-aid/promises 16.asyncparallel.js
const sometimesFails = require('situations/sometimesFails')
const wait = require('situations/wait')

// A normal way to run in parallel is to use Promise.all()
// It could be skipped as seen in run1, but may result in an unhandled rejection situation.
// Notice how the error causes an unhandled rejection inconsistently if you run this multiple times.

const run1 = async () => {
    console.time('run1')
    try {
        const [a, b] = [wait(200), wait(200)]
        console.log(await a, await b)
        console.timeEnd('run1')
    } catch (e) {
        console.error(e)
    }
}

const run2 = async () => {
    console.time('run2')
    try {
        const [a, b] = [await wait(200), await wait(200)]
        console.log(a, b)
        console.timeEnd('run2')
    } catch (e) {
        console.error(e)
    }
}

const run3 = async () => {
    console.time('run3')
    try {
        const [a, b] = [sometimesFails(), sometimesFails()]

        console.log(await a, await b)
        console.timeEnd('run3')
    } catch (e) {
        console.error(e)
    }
}

run1()
run2()
run3()

// example run result
// node --require debugging-aid/promises 16.asyncparallel.js
// >> fail
// [aid] unhandledRejection  id: 1
//  reason: Error: failure
//  stack: Error: failure
//     at /storage/projects/github/node-examples/promises-async/node_modules/situations/sometimesFails.js:7:19
// >> success
// Error: failure
//     at /storage/projects/github/node-examples/promises-async/node_modules/situations/sometimesFails.js:7:19
// [aid]  rejectionHandled id: 1 (previously reported unhandled, handled with a delay)
// undefined undefined
// run1: 212.564ms
// undefined undefined
// run2: 411.632ms
