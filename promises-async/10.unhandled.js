const breaksAsyncCallback = require('situations/breaksAsyncCallback');

// This app will randomly crash. Fix it my catching the error currently unhandled
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

setInterval(()=>{
    console.log('A running interval is preventing app from stopping (just like a running server) - so you can see when the app crashes')
},10000)
