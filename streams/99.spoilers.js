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

