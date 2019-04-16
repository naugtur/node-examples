const breaksAsyncCallback = require('situations/breaksAsyncCallback');

// This code will randomly crash. Fix it by catching the error currently unhandled
//  It also demonstrates the risk of using new Promise
//  Also, compare with util.promisify when you have the time

const work = new Promise((resolve, reject) => {
  setTimeout(() => {
    breaksAsyncCallback((err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  }, 100);
});

work.then(console.log, console.error);

// A server to crash
require('http').createServer(()=>{}).listen(1111);
// As long as the server listens on the port the app should not stop. But an unhandled Exception will crash it, just like it would crash your server with an actual app.