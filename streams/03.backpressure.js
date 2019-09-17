const { pipeline, Transform } = require("stream");
const fs = require("fs");
const tarpit = require("stream-spectrum/writable/tarpit");

const sourceStream = fs.createReadStream("/dev/urandom");
const targetStream = tarpit({ throttle: 200 })
pipeline(
  sourceStream,
  monitor(),
  breakBackpressure(targetStream),
  // (targetStream),
  err => {
    console.error("oh no!", err);
  }
);

function monitor() {
  let perSecond = 0;
  let memBaseline;
  setInterval(() => {
    if (!memBaseline) {
      memBaseline = process.memoryUsage().heapUsed / 10;
    }
    console.log(
      "mem:",
      "=".repeat((process.memoryUsage().heapUsed / memBaseline - 9)||0),
      "per sec:",
      perSecond
    );
    perSecond = 0;
  }, 1000);
  return new Transform({
    transform(chunk, enc, done) {
      this.push(chunk);
      perSecond += chunk.length;
      done();
    }
  });
}

function breakBackpressure(stream) {
  const write = stream.write;
  stream.write = function() {
    write.apply(this, arguments);
    return true;
  };
  return stream;
}
