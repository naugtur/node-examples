const { breaksAsyncCallbackSometimes, breaksAsyncCallbackAlways } = require('z/situations/breaksAsyncCallback');

const work = new Promise((resolve, reject) => {
    breaksAsyncCallbackAlways((err, res) => {
    if (err) {
      return reject(err);
    }
    return resolve(res);
  });
});

// This code will randomly crash. Fix it.
//  It demonstrates the risk of using new Promise
//  Also, compare with util.promisify when you have the time

const work2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    breaksAsyncCallbackSometimes((err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  }, 100);
});

work.then(console.log, err=>console.error('work',err));
work2.then(console.log, err=>console.error('work2',err));

// A server to crash
require('http').createServer(()=>{}).listen(1111);
// As long as the server listens on the port the app should not stop. But an unhandled Exception will crash it, just like it would crash your server with an actual app.