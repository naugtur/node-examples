// run node --require debugging-aid/promises 16.asyncparallel.js
const alwaysFails = require('z/situations/alwaysFails')
const wait = require('z/situations/wait')

// A normal way to run in parallel is to use Promise.all()
// It could be skipped as seen in run1, but may result in an unhandled rejection situation.
// Notice how the error causes an unhandled rejection inconsistently if you run this multiple times.

// Regular way to await on array items
const run1 = async () => {
  console.time('run1')
  try {
    const [a, b] = [await wait(200), await wait(200)]
    console.log(a, b)
    console.timeEnd('run1')
  } catch (e) {
    console.error(1, e)
  }
}

// Let them start in parallel and await later
const run2 = async () => {
  console.time('run2')
  try {
    const [a, b] = [wait(200), wait(200)]
    console.log(await a, await b)
    console.timeEnd('run2')
  } catch (e) {
    console.error(2, e)
  }
}

// Errors get caught
const run3 = async () => {
  console.time('run3')
  try {
    const [a, b] = [wait(), alwaysFails()]

    console.log(await a, await b)
  } catch (e) {
    console.error(3, e)
    console.timeEnd('run3')
  }
}

// But not really...
const run4 = async () => {
  console.time('run4')
  try {
    const [a, b] = [alwaysFails(), alwaysFails()]

    console.log(await a, await b)
  } catch (e) {
    console.error(4, e)
    console.timeEnd('run4')
  }
}

run1()
run2()
run3()
run4()

// example run results
// $ node --require debugging-aid/promises 16.asyncparallel.js
// >> fail
// 4 Error: failure
//     at /storage/projects/github/node-examples/promises-async/node_modules/situations/alwaysFails.js:6:15
//     at async run4 (/storage/projects/github/node-examples/promises-async/16.asyncparallel.js:52:17)
// run4: 22.155ms
// >> fail
// [aid] unhandledRejection  id: 1
//  reason: Error: failure
//  stack: Error: failure
//     at /storage/projects/github/node-examples/promises-async/node_modules/situations/alwaysFails.js:6:15
// >> fail
// 3 Error: failure
//     at /storage/projects/github/node-examples/promises-async/node_modules/situations/alwaysFails.js:6:15
//     at async run3 (/storage/projects/github/node-examples/promises-async/16.asyncparallel.js:39:26)
// run3: 100.564ms
// undefined undefined
// run2: 200.887ms
// undefined undefined
// run1: 403.253ms
// $ node --require debugging-aid/promises 16.asyncparallel.js
// >> fail
// 4 Error: failure
//     at /storage/projects/github/node-examples/promises-async/node_modules/situations/alwaysFails.js:6:15
//     at async run4 (/storage/projects/github/node-examples/promises-async/16.asyncparallel.js:52:17)
// run4: 37.877ms
// >> fail
// [aid] unhandledRejection  id: 1
//  reason: Error: failure
//  stack: Error: failure
//     at /storage/projects/github/node-examples/promises-async/node_modules/situations/alwaysFails.js:6:15
// >> fail
// [aid] unhandledRejection  id: 2
//  reason: Error: failure
//  stack: Error: failure
//     at /storage/projects/github/node-examples/promises-async/node_modules/situations/alwaysFails.js:6:15
// 3 Error: failure
//     at /storage/projects/github/node-examples/promises-async/node_modules/situations/alwaysFails.js:6:15
// run3: 67.510ms
// [aid]  rejectionHandled id: 1 (previously reported unhandled, handled with a delay)
// undefined undefined
// run2: 200.935ms
// undefined undefined
// run1: 403.740ms
// $ node --require debugging-aid/promises 16.asyncparallel.js
// >> fail
// [aid] unhandledRejection  id: 1
//  reason: Error: failure
//  stack: Error: failure
//     at /storage/projects/github/node-examples/promises-async/node_modules/situations/alwaysFails.js:6:15
// >> fail
// 3 Error: failure
//     at /storage/projects/github/node-examples/promises-async/node_modules/situations/alwaysFails.js:6:15
//     at async run3 (/storage/projects/github/node-examples/promises-async/16.asyncparallel.js:39:26)
// run3: 44.969ms
// >> fail
// 4 Error: failure
//     at /storage/projects/github/node-examples/promises-async/node_modules/situations/alwaysFails.js:6:15
//     at async run4 (/storage/projects/github/node-examples/promises-async/16.asyncparallel.js:52:17)
// run4: 46.472ms
// undefined undefined
// run2: 201.147ms
// undefined undefined
// run1: 404.599ms
