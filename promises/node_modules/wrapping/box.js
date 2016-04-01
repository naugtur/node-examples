'use strict';

module.exports = function promiseWrapping(ofWhat) {
    return require('helpers').delay().then(() => (`${ofWhat} in a box`))
}
