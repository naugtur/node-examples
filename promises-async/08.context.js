// ab -n12 -c3 http://localhost:8080
// autocannon -c3 -a12 http://localhost:8080

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
    return Promise.resolve(`initial.${idSeq}.${num}`)
        .then(q => fetch(`http://postman-echo.com/get?q=${q}`))
        .then(re => re.json())
        .then(json => {
            const num2 = asyncLocalStorage.getStore().id
            return JSON.stringify({ 
                idSeqLater:idSeq,
                numLater:num2,
                q: json.args.q
            });
        })
}

function output(result, idSeq) {
    const num = asyncLocalStorage.getStore().id
    const summary = `num:${num}, result:${result}, idSeqOnOutput:${idSeq}`
    console.log(summary)
    return summary
}
