'use strict';

module.exports = function(name) {
    return function(req, res, next) {
        console.log(name, req.body)
        next()
    }
}
