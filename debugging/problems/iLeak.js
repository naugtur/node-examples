'use strict'
const leaksSoMuch = [];

function leakingNamedObject() {
    this.onelineJSjoke = 'isNaN("leavened, oven-baked flatbread"); // true'.repeat(100);
}

module.exports = function startLeaking(req, res) {

    setInterval(function() {
        for (let i = 0; i < 100; i++) {
            leaksSoMuch.push(new leakingNamedObject());
        }
    }, 1000);
    res.end('ok')
};
