'use strict'
module.exports = function fillMem (req, res) {
  const a = []
  while (true) {
    a.push('ZZZZZZZZZZZZ'.repeat(20000000))
  }
}
// http://stackoverflow.com/questions/34135073/where-are-core-dump-files-produced-by-node-abort-on-uncaught-exception-locat
