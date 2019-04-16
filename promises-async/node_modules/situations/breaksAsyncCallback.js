"use strict";

module.exports = {
  breaksAsyncCallbackSometimes(cb) {
    if (Math.random() > 0.5) {
      console.log(">> fail sync");
      throw Error("synchronous failure");
    }
    return require("helpers")
      .delay()
      .then(() => {
        if (Math.random() > 0.3) {
          console.log(">> fail");
          cb(Error("failure"))
        }
        cb(null, 'worked')
      });
  },
  breaksAsyncCallbackAlways(cb) {
      console.log(">> fail sync");
      throw Error("synchronous failure");
  }
};
