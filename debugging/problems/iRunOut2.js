'use strict'
module.exports = function fillMem (req, res) {
  const a = []

  setInterval(function () {
    for (let i = 0; i < 10000; i++) {
      a.push('ZZZZZZZZZZZZ'.repeat(20000000))
    }
  }, 0)
  res.end('ok')
}
// http://stackoverflow.com/questions/34135073/where-are-core-dump-files-produced-by-node-abort-on-uncaught-exception-locat
