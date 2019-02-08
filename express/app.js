'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const tap = require('./middlewares/tap')


const app = express()
const router = express.Router()

router.use('/', tap('before'))
router.use('/posthere', bodyParser.json())
router.use('/', tap('after'))
router.post('/posthere', echo)

router.get('/unicorns', echo)
router.get('/dragons', kaboom)

//use the router configured above
app.use('/api', router)
app.get('/check', echo)


app.listen(1337)

// some handlers you can try 
function echo(req, res) {
    res.send(req.url)
}

function kaboom(req, res) {
    throw Error('sorry')
}