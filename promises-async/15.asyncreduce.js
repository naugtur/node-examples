// run node --require debugging-aid/promisecount 15.asyncreduce.js
// compare how many promises are created in both cases of async function composition with reduce
// analyze why
"use strict";

const alwaysFails = require('z/situations/alwaysFails')


const inc = (x) => x + 1;
const asInc = async (x) => x + 1;

//* - remove one slash to toggle
const functions = [asInc, inc, asInc, inc, asInc]
/*/
const functions = [asInc, inc, asInc, inc, alwaysFails];
//*/

const result = functions.reduce(async (acc, f) => await f(await acc), (async i => i)(1))
// const result = functions.reduce((acc, f) => acc.then(f), Promise.resolve(1))
// const result = functions.reduce(async (acc, f) => f(await acc), 1);

result.then(console.log, console.error);
