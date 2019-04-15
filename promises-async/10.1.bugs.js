const wait = require('situations/wait')

// multiple resolves
const work = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 100);
  setTimeout(() => {
    resolve('ok')
  }, 1000);
  setTimeout(() => {
    resolve('ok')
  }, 2000);
});

work.then(console.log, console.error);


//unhandled rejection - broken chain
wait(100).then(() => {
  if(true){
    wait(100).then(() => {
      throw Error('nested error')
    })
  }
}).catch(() => {})

// delayed handled rejection
wait(100).then(() => {
  wait(101).then(() => {
    throw Error('nested error')
  })
  return {
    hiddenPromise: wait(100).then(() => {
      throw Error('nested error')
    })
  }
}).then(obj => {
  setTimeout(()=>{
    obj.hiddenPromise.catch(console.log)
  },110)
})