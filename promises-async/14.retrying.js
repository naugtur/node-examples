'use strict'

const failsFirst3 = require('situations/failsFirstN')(3)
const wait = require('situations/wait')

const MAX_RETRIES = 2


// TODO: implement retry to keep retrying untl success or throw error when MAX_RETRIES run out
// Implement with async await and then promises



retry(failsFirst3)
    .then(console.log)