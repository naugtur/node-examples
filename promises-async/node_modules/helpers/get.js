const https = require("https");
const { delay } = require(".");

module.exports = function get(url, wait = 0) {
  console.log("making a get request");
  return delay(wait).then(() => getJson(url));
};

const getJson = url =>
  new Promise((resolve, reject) => {
    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        try {
          body = JSON.parse(body);
        } catch (e) {
          reject(e);
        }
        resolve(body);
      });
    });
  });
