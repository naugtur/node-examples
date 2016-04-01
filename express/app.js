'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const tap = require('./middlewares/tap')

function echo(req, res) {
    res.send(req.url)
}

function kaboom(req, res) {
    throw Error('sorry')
}

const app = express()
const router = express.Router()

router.use('/', tap('before'))
router.use('/posthere', bodyParser.json())
router.use('/', tap('after'))
router.post('/posthere', echo)

router.get('/unicorns', echo)
router.get('/dragons', kaboom)

app.get('/check', echo)
app.use('/api', router)


app.listen(1337)
