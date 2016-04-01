'use strict';

const spawnPerson = require('situations/dude')

function entersStore(name) {
    return spawnPerson(name)
        .then((dude) => {
            console.log(`${dude} has entered the store`)
        })
}

const names = ['Adam', 'Bruce', 'Carl', 'Doug', 'Elon']

//make them enter the store in order
