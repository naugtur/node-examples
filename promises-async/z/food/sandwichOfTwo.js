'use strict';

module.exports = function promiseSandwich(ingredient1, ingredient2) {
    return require('../helpers').delay().then(() => {
        return `You made a ${ingredient1} and ${ingredient2} sandwich`
    })
}
