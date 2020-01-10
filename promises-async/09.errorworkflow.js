'use strict';

const fakeDBFromArray = require('z/db').fakeDBFromArray

const db = fakeDBFromArray(['list','item1','item2','item3','item1details','item2details','item3details'])
//variants of broken data:
// const db = fakeDBContains(['list','item1','item2','item3'])
// const db = fakeDBContains(['list','item1','item2','item3','item1details','item2details'])
// const db = fakeDBContains(['list','item1','item2'])
// const db = fakeDBContains(['list','item1','item2','item1details','item2details','item3details'])

//TODO: get list of items, based on that get 3 items, based on that get details for every item.

db.get('list')
db.get('item1')
db.get('item2')
db.get('item3')
db.get('item1details')
db.get('item2details')
db.get('item3details')
