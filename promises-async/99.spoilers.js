//==================================== 01
inBox(gift).then(inPaper).then(inRibbons).then(inGlitter).then(console.log, console.error)


//==================================== 04
// shortest implementation with reduce
names.reduce((prev, name) => prev.then(() => entersStore(name)), Promise.resolve())

//==================================== 10.4

function getListCached() {
    if (!cache) {
      cache = populateCache();
      return cache;
    } else {
      console.log("   - returning from cache");
      return cache;
    }
  }

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
function recursiveRetry(actionFunction, count = 0) {
    return actionFunction().catch(() => {
        if (++count < MAX_RETRIES) {
            return wait(5)
                .then(() => recursiveRetry(actionFunction, count))
        }
        throw Error('No more retries')
    })
}

// Async await implementation
async function retry(actionFunction) {
    for (let i = 0; i < MAX_RETRIES; i++) {
        try {
            return await actionFunction()
        } catch (err) {
            await wait(5)
        }
    }
    throw Error('No more retries')
}
