'use strict'
module.exports = function blockLoop(req, res) {
    let s = +new Date();
    while ((+new Date()) - s < 2000) {
        'I block so much'.split('').join('')
    }
    res.end('ok')
}
