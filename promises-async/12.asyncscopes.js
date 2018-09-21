'use strict';

const promisePeanutButter = require('food/pb')
const promiseJelly = require('food/jelly')
const promiseSandwich = require('food/sandwichOfTwo')

//make a peanut butter and jelly sandwich
async function sudoMakeMeASandwitch(){
    const sandwich = //type here
    console.log(sandwich)
}

sudoMakeMeASandwitch()



// parallel await - they're still promises
const db = fakeDBFromMap({
    list: ['item1', 'item2', 'item3'],
    item1: 'I',
    item2: 'like',
    item3: 'pancakes' //try wth this missing too
})

db.get('list')
    .then(list => Promise.all(list.map(key => db.get(key))))
    .then(results => console.log(results.join(' ')))
    .catch(err => console.log('uh oh', err))

// now rewrite with async await

