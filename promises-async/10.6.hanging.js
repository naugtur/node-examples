// node --expose-gc 10.6.hanging.js
// autocannon -d3 -c999 http://localhost:8080
// clinic doctor --autocannon [ / --method GET -d10 -c999 ] --  node --expose-gc 10.6.hanging.js


const sometimesFails = require('z/situations/sometimesFails')

require("http")
  .createServer(async function (req, res) {
    sometimesFails()
      .then(text => res.end(text))
      .catch(() => { }) //or not catching at all in older node version - unhandled rejection
  })
  .listen(8080);


function printMemory() {
  global.gc();
  console.log((process.memoryUsage().heapUsed / 1024).toFixed(0) + "KB");
}
setInterval(printMemory, 1000);
