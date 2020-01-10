// This one can only work in Node.js

const get = require("z/helpers/get");

function populateCache() {
  return get("https://jsonplaceholder.typicode.com/todos", 5000);
}

let cache = null;
function getListCached() {
  if (!cache) {
    return populateCache().then(result => {
      cache = result;
      return cache;
    });
  } else {
    console.log("   - returning from cache");
    return cache;
  }
}

function chooseFromCachedList(criteria) {
  return Promise.resolve()
    .then(getListCached)
    .then(list => list.filter(item => (item.userId = criteria)));
}

let counter = 0;
require("http")
  .createServer(function(req, res) {
    const reqId = counter++;
    console.log(` -> incoming ${reqId}`);
    chooseFromCachedList(1).then(result => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
      console.log(` <- sent ${reqId}`);
    });
  })
  .listen(8080);
