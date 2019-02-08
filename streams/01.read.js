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

const stream = require('stream')

const writable = // This is where you come in

//implement something to put all contents in the putHTMLhere variale
streamingRequest.pipe(writable)

