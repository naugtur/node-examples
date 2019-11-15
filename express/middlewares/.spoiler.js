const { pipeline, Writable } = require("stream");

module.exports = (req, res, next) => {
    let body = "";
    const writable = new Writable({
        write(chunk, enc, cb) {
            try {
                body += chunk.toString();
                cb();
            } catch (err) {
                cb(err);
            }
        }
    });
    
    pipeline(req, writable, err => {
        if (err) {
            return next(err);
        }
        try {
            req.body = JSON.parse(body);
            next();
        } catch (e) {
            next(e);
        }
    });
};
