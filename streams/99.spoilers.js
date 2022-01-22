//==================================== 01

const writable = new Writable({
    write(chunk, encoding, next) {
        try {
            putHTMLhere += chunk.toString();
            next()
        } catch (err) {
            next(err)
        }
    }
});


//==================================== 02
pipeline(
    fs.createReadStream(source),
    errorUnlikely(),
    getCounter("b"),
    zlib.createGzip(),
    getCounter("a"),
    fs.createWriteStream(target),
    err => {
        if(err) {
            console.error('oh no!', err);
        } else {
            console.log('done')
        }
    }
    );

//==================================== 04
for await (const chunk of readStream) {
    contentLength += chunk.length
}