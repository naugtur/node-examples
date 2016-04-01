'use strict'
module.exports = function fillMem(req, res) {
    let a = [1,2,3];
    setInterval(function(){
        a = a.concat(a);
    },10)
    res.end('ok')
};
//http://stackoverflow.com/questions/34135073/where-are-core-dump-files-produced-by-node-abort-on-uncaught-exception-locat
