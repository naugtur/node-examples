'use strict';

module.exports = function promisePerson(name) {
    return require('../helpers').delay().then(() => (`my friend ${name}`))
}
