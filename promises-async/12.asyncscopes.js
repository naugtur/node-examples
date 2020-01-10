'use strict';

const promisePeanutButter = require('z/food/pb')
const promiseJelly = require('z/food/jelly')
const promiseSandwich = require('z/food/sandwichOfTwo')

//make a peanut butter and jelly sandwich
async function sudoMakeMeASandwitch(){
    const sandwich = //type here
    console.log(sandwich)
}

sudoMakeMeASandwitch()


const { fakeDBFromMap } = require('z/db')

// parallel await - they're still promises
const db = fakeDBFromMap({
    list: ['item1', 'item2', 'item3'],
    item1: 'I',
    item2: 'like',
    item3: 'pancakes' //try wth this missing too
})

function refactorMe() {
    return db.get('list')
        .then(list => Promise.all(list.map(key => db.get(key))), () => { return [] })
        .then(results => console.log(results.join(' ')))
        .catch(err => console.log('uh oh', err))
}

// now rewrite with async await

refactorMe()