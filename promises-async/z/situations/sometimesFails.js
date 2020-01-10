'use strict';

module.exports = function sometimesFails() {
    return require('helpers').delay().then(() => {
        if (Math.random() > 0.5) {
            console.log('>> fail')
            throw Error('failure')
        }
        console.log('>> success')
        return 'success'
    })
}
