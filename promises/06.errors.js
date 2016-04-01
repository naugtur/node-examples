'use strict';

const sometimesFails = require('situations/sometimesFails')

//catch the error from sometimesFails and recover from it. let the 'I wanted failure' error be thrown otherwise
sometimesFails()
    .then(function() {
        throw Error('I wanted failure')
    })
    .catch(function(err) {
        console.log(err)
    })
