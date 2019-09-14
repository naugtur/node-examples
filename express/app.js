'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const tap = require('./middlewares/tap')


const app = express()
const router = express.Router()

router.use('/', tap('before'))
router.use('/posthere', bodyParser.json({type:"*/*"}))
router.use('/', tap('after'))
router.post('/posthere', (req,res)=>{
    console.log(req.body["my spoon"])
    res.end()
})

router.get('/unicorns', echo)
router.get('/dragons', kaboom)

//use the router configured above
app.use('/api', router)
app.get('/check', echo)


app.listen(1337, ()=>{
    console.log("server started")
})

// some handlers you can try 
function echo(req, res) {
    res.send(req.url)
    console.log("handled", req.url)
}

function kaboom(req, res) {
    throw Error('sorry')
}