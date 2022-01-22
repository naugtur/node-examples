// https://nodejs.org/api/stream.html#streams-compatibility-with-async-generators-and-async-iterators

const fs = require('fs')

async function checkLength(filePath) {
    let contentLength = ''
    const readStream = fs.createReadStream(filePath,
        { encoding: 'utf8', highWaterMark: 1024 })

    //calculate the length
    
    return contentLength
}

checkLength(__filename).then(console.log, console.error)