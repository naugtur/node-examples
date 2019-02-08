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
// useful for creating a random string. Math.random is not random enough for security!
const crypto = require('crypto')

// look, what a lovely key-value database!
const fakeDatabase = new Map();

function mySessionMiddleware(req, res, next) {
}


const app = express()
app.use(cookieParser())
app.use('/', express.static('pages/public'))

app.use('/private', mySessionMiddleware)
app.use('/private', express.static('pages/private'))

app.post('/login', bodyParser.urlencoded(), (req, res) => {
})


app.listen(1337)

// this line is needed for the test to work
module.exports = app;