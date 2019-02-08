'use strict';

//use these as your users database (they match with the tests)
const users = {
    bob: '123456',
    alice: 'CorrectHorseBatteryStaple'
}

// the only modules you're allowed to use in this example
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const crypto = require('crypto')

const app = express()
app.use('/', express.static('pages/public'))

app.use('/private', express.static('pages/private'))


app.listen(1337, ()=>console.log('http://localhost:1337/'))


// this line is needed for the test to work
module.exports = app;