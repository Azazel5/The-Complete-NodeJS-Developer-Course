// console.log('Starting')

// setTimeout(() => {
//     console.log('2 sec timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 sec timer')
// }, 0)

// console.log('Stopping')

/** Notes on asynchronous Node.js */

// If you have a setTimeout with 0 seconds, that is going to run after any synchronous calls like
// console.log, strangely. 
// Watch video #30 (Call stack, queue...) once again, after finishing building out the weather 
// application!
// No asynchronous callback gets run until the main function is done running...