const wait = require('z/situations/wait')

//unhandled rejection - broken chain
wait(100).then(() => {
  if(true){
    wait(100).then(() => {
      throw Error('nested error')
    })
  }
}).catch(() => {})
