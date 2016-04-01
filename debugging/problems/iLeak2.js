//this code makes no sense on purpose :)
//don't read it till you see the heapdumps
'use strict'
const strawberries = (function strawberryClosure() {
    const blueberry = {}
    return {
        leakMore(name, item) {
            blueberry[name] = item
        }
    }
})()

module.exports = function startLeaking(req, res) {

    setInterval(function() {
        let id = Math.random().toFixed(10)
        strawberries.leakMore(`someberry${id}`, 'Wait, what? '.repeat(100))
    }, 10);
    res.end('ok')
};
