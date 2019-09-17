// run node --require debugging-aid/promisecount 15.asyncreduce.js
// compare how many promises are created in both cases of async function composition with reduce
// analyze why
'use strict'

const inc = (x) => x + 1
const asInc = async (x) => x + 1

const functions = [asInc, inc, asInc, inc, asInc]

const result = functions.reduce(
    async (acc, f) => await f(await acc), (async i => i)(1)
)

// const result = functions.reduce(
//     (acc, f) => acc.then(f), Promise.resolve(1)
// )

result.then(console.log)
