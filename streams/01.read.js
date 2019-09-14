'use strict';

// Use this variable to concatenate the stream into
let putHTMLhere = '';


// This will show you how many characters you managed to put in place
let prev = 0;
setInterval(() => {
    if (putHTMLhere.length != prev) {
        prev = putHTMLhere.length
        console.log(putHTMLhere.length)
    }
}, 1)

const request = require('request')

const streamingRequest = request('https://developer.mozilla.org')

const { Writable } = require('stream');

const writable = TODO

//some indication of what's happening
streamingRequest.on('end', () => console.log("streamingRequest end"))
streamingRequest.on('finish', () => console.log("streamingRequest finish"))
writable.on('end', () => console.log("writeable end"))
writable.on('finish', () => {
    console.log("writeable finish")
    console.log(putHTMLhere.substr(-10, 10))

})
//implement something to put all contents in the putHTMLhere variale
streamingRequest.pipe(writable)
