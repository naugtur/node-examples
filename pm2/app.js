'use strict';

const express = require('express')

function echo(req, res) {
    res.send("welcome to: " + req.url)
}

const app = express()
const router = express.Router()


router.get('/', echo)

app.get('/check', echo)
app.use('/api', router)


app.listen(80)
