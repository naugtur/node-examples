'use strict';

module.exports = function promiseWrapping(ofWhat) {
    return require('helpers').delay().then(() => (`${ofWhat} sprinkled with glitter`))
}
