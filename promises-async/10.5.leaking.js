// node --expose-gc 10.5
function printMemory() {
  global.gc();
  console.log((process.memoryUsage().heapUsed / 1024).toFixed(0) + "KB");
}

//try all 3 cases:
const prom = new Promise((resolve) => resolve());
// const prom = new Promise((resolve) => {});
// const prom = new Promise((resolve) => {setTimeout(resolve,10000)});

setInterval(() => {
  const n = Date.now();
  while (Date.now() - n < 10) {
    function dafunc(abrandnewfunctioneachtime) {}
    prom.then(dafunc);
  }
}, 0);

setInterval(printMemory, 1000);
