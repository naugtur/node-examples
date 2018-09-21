'use strict';

const sometimesFails = require('situations/sometimesFails')

// sometimesFails will randomly reject the promise. The goal here is to reverse ts result.
// When it rejects, recover from it and make sure the 'Ok' is printed
// If sometimesFails resolved correctly, the 'I want falure' error should still happen and get prnted
sometimesFails()
    .then(() => {
        throw Error('I wanted failure')
    })
    //don't change anything below this line ;)
    .then(() => {
        console.log('Ok')
    })
    .catch((err) => {
        console.log('Error:', err)
    })
