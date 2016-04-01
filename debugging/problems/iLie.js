'use strict';

function promiseSomethingFromDisconnectedDb() {
    return new Promise((resolve, reject) => {
        //never resolve
    })
}

module.exports = function promiseFalsely(req, res) {
    promiseSomethingFromDisconnectedDb()
        .then(() => {
            res.end('ok')
        })
};
