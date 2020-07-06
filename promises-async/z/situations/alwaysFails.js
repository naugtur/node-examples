'use strict';

module.exports = function alwaysFails() {
    return require('../helpers').delay().then(() => {
        console.log('>> fail')
        throw Error('failure')
    })
}
