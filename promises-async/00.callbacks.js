// run and see

function a() {
    console.log(2)
}
console.log(1)
a()
console.log(3)


setImmediate(() => {
    console.log('5.d');
})
setTimeout(() => {
    console.log('5.c');
}, 0)


queueMicrotask(() => {
    console.log('5.b')
})


// this is node specific
process.nextTick(() => {
    console.log('5.a');
})

console.log(4);


// function noop(){}

// async function b(){
//     const x = await noop()
//     console.log('6.b')
// }
// b()
// console.log('6.a');

// Promise.resolve().then(() => {
//     console.log('7.b');
// })
// console.log('7.a');

