const wait = require('situations/wait')

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