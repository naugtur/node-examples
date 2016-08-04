'use strict';
const p = require('bluebird');
module.exports = function createWorker(delays) {
    return p.delay(delays.createDelay).return({
        doWork(){
            return p.delay(delays.doWorkDelay).return("worker done!")
        }
    })
}
