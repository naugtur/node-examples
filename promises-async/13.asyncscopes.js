'use strict';

const fakeDBFromMap = require('db').fakeDBFromMap



// merging and scopes
const db = fakeDBFromMap({
    start: { txt: 'There', next: 'k1' },
    k1: { txt: 'is', next: 'k2' },
    k2: { txt: 'no', next: 'k3' },
    k3: { txt: 'spoon', next: 'k4' }
})

//callback hell with promises
db.get('start')
    .then(word1 => {
        return db.get(word1.next)
            .then(word2 => {
                return db.get(word2.next)
                    .then(word3 => {
                        console.log(word1.txt, word2.txt, word3.txt, 'HOPE')
                    })
            })
    })

//let's try a little better
let word1
let word2
let word3
db.get('start')
    .then(aword => {
        word1 = aword
        return db.get(aword.next)
    })
    .then(aword => {
        word2 = aword
        return db.get(aword.next)
    })
    .then(aword => {
        word3 = aword
        return db.get(aword.next)
    })
    .then(aword => {
        const word4 = aword
        console.log(word1.txt, word2.txt, word3.txt, word4.txt)
    })


// TODO: now check out how nice it is with async
async function thatsNice() {

    // YOUR CODE HERE

    console.log(word1.txt, word2.txt, word3.txt, word4.txt)
}
thatsNice()

// Try error handling and recovery if there's time 