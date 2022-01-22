const http = require('http');
const { AsyncLocalStorage } = require('async_hooks');
const fetch = require('undici').fetch;
const asyncLocalStorage = new AsyncLocalStorage();


let idSeq = 0;
http.createServer((req, res) => {
    idSeq++
    asyncLocalStorage.run({ id: idSeq }, () => {
        fetchSome()
            .then(q => output(q, idSeq))
            .then(summary => res.end(summary), () => res.end())
    });
}).listen(8080);

function fetchSome() {
    const num = asyncLocalStorage.getStore().id
    return Promise.resolve((num + Math.random()).toFixed(5))
        .then(q => fetch(`http://postman-echo.com/get?q=${q}`))
        .then(re => re.json())
        .then(json => json.args.q)
}

function output(result, idSeq) {
    const num = asyncLocalStorage.getStore().id
    const summary = `num:${num}, result:${result}, idSeq:${idSeq}`
    console.log(summary)
    return summary
}

//TODO: break it with bad queue