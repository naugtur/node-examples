'use strict';

module.exports = function promiseJelly() {
    return require('helpers').delay().then(() => ('jelly'))
}
