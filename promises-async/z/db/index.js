'use strict';
const helpers = require('../helpers')
const console = require('console')

module.exports = {
    fakeDBFromArray(seed) {
        return {
            get(name) {
                console.log(`>> fetching ${name}`)
                return helpers.delay(5).then(() => {
                    const found = seed.includes(name)
                    console.log(`>> got ${name} ${found}`)
                    if (found) {
                        return `${name} success!`
                    } else {
                        throw Error(`${name} failed`)
                    }
                })
            }
        }
    },
    fakeDBFromMap(data) {
        return {
            get(name) {
                console.log(`>> fetching ${name}`)
                return helpers.delay(5).then(() => {
                    const found = data.hasOwnProperty(name)
                    console.log(`>> got ${name} ${found}`)
                    if (found) {
                        return data[name]
                    } else {
                        throw Error(`${name} failed`)
                    }
                })
            }
        }
    }
}
