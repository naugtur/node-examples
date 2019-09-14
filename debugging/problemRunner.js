const problem = process.argv[2]


//dummy monitoring
const blocked = require('blocked')
blocked(function (ms) {
    console.log('BLOCKED FOR %s ms', ms | 0);
});
setInterval(function () {
    console.log(process.memoryUsage())
}, 5000).unref()

require('./problems/' + problem)()