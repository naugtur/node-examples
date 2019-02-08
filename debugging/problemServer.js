'use strict';

const express = require('express')
const app = express()

app.get('/problem/:problem', function(req, res) {
    require('./problems/' + req.params.problem)(req, res)
})

app.get('/heapdump', function(req, res) {
    require('heapdump').writeSnapshot(function(err, filename) {
        if (err) {
            res.end(err);
        } else {
            res.end(`dump written to: ${process.cwd()}/${filename} \n`);
        }
    });
})

app.listen(1337,()=>console.log('http://localhost:1337/problem/'))

//dummy monitoring
const blocked = require('blocked')
blocked(function(ms) {
    console.log('BLOCKED FOR %s ms', ms | 0);
});
setInterval(function() {
    console.log(process.memoryUsage())
}, 5000)
