

//==================================== 04
// shortest implementation s with reduce
names.reduce((prev, name) => prev.then(() => entersStore(name)), Promise.resolve())


//==================================== 13
async function d() {
    try {
        
        const list = await db.get('list')
        const results = await Promise.all(list.map(key => db.get(key)))
        console.log(results.join(' '))
    } catch (err) {
        console.log('uh oh', err)
    }
}
d()


//==================================== 14
// A good looking promise implementation
function recursiveRetry(requestFunction, count = 0) {
    return requestFunction().catch(() => {
        if (++count < MAX_RETRIES) {
            return wait(5)
                .then(() => recursiveRetry(requestFunction, count))
        }
        throw Error('No more retries')
    })
}

// Async await implementation
async function retry(requestFunction) {
    for (let i = 0; i < MAX_RETRIES; i++) {
        try {
            return await requestFunction()
        } catch (err) {
            await wait(5)
        }
    }
    throw Error('No more retries')
}
