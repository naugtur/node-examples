'use strict';

module.exports = function failsFirstN(N) {
    let count = 0;
    return function falsFirst() {
        return require('helpers').delay().then(() => {
            if (count++ < N) {
                console.log('>> fail')
                throw Error('failure')
            }
            console.log('>> success')
            return 'success'
        })
    }
}
