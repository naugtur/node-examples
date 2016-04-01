'use strict';

//npm install request
const request = require('request')

const streamingRequest = request('https://developer.mozilla.org')

var putHTMLhere='';

//implement something to put all contents in the putHTMLhere variale
streamingRequest.pipe(something)
