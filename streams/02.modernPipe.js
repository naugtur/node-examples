const { pipeline, Transform } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

const source = '/dev/urandom'
const target = '/dev/null'

function getCounter(name) {
    let counter = 0
    return new Transform({
        transform(chunk, enc, done) {
            this.push(chunk);
            counter += chunk.length
            console.log(name, counter)
            done();
        }
    })
}

function errorUnlikely() {
    return new Transform({
        transform(chunk, enc, done) {
            if (Math.random() < 0.01) {
                done(Error('kthxbye'))
            }
            this.push(chunk);
            done();
        }
    })
}

fs.createReadStream(source)
    .pipe(errorUnlikely())
    .pipe(getCounter('b'))
    .pipe(zlib.createGzip())
    .pipe(getCounter('a'))
    .pipe(fs.createWriteStream(target))
    .on('error', (err) => {
        console.error('oh no!', err)
    })