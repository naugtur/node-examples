'use strict';

module.exports = {
    /*jshint -W098*/
    handle404: function handle404(req, res, next) { //next must be here
        res.status(404)
        res.end('There is no spoon')
    },
    handle500: function handle500(err, req, res, next) { //next must be here
        res.status(500)
        res.end('Kaboom')
    }
    /*jshint +W098 */
};
