'use strict';

const alwaysFails = require('situations/alwaysFails')

//replace the error with a more descriptive one
alwaysFails()
    //by doing something here
    .catch(function(err) {
        console.log(err.stack)
    })
