'use strict';

const spawnPerson = require('situations/person')

function entersStore(name) {
    return spawnPerson(name)
        .then((dude) => {
            console.log(`${dude} has entered the store`)
        })
}

const names = ['Alice', 'Bruce', 'Cecil', 'Doug', 'Emma']

//make them enter the store in order
