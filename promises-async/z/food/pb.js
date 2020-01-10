'use strict';

module.exports = function promisePeanutButter() {
    return require('helpers').delay().then(() => ('peanut butter'))
}
