// console.log('Starting')

// setTimeout(() => {
//     console.log('2 sec timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 sec timer')
// }, 0)

// console.log('Stopping')

// Callbacks
// setTimeout(() => {
//     console.log("Two seconds are up")
// }, 2000)

// const names = ['Jen', 'Jess', 'Subhanga']
// const shortNames = names.filter(name => name.length <= 4)

// const geoCode = (address, callback) => {
//     setTimeout(() => {
//         const data = { latitude: 123, longitude: 321 }
//         callback(data)
//     }, 2000)
// }

// geoCode('', (data) => {
//     console.log("Data is available here: ", data)
// })

// const add = (num1, num2, callback) => {
//     setTimeout(() => {
//         const sum = num1 + num2
//         callback(sum)
//     }, 2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

/** Notes on asynchronous Node.js */

// If you have a setTimeout with 0 seconds, that is going to run after any synchronous calls like
// console.log, strangely. 
// Watch video #30 (Call stack, queue...) once again, after finishing building out the weather 
// application!
// No asynchronous callback gets run until the main function is done running...

// Why use callbacks? The problem with the normal functional approach (perform stuff in a function,
// return it, and then use it) is that when you're making asynchronous requests, they end up
// taking some time, so the data isn't returned, so the return value is undefined. When doing
// time intensive operations, providing callback functions which run only after the data is 
// successfully received is a useful pattern.

// TLDR: synchronous - return pattern works; asynchronous - callback pattern

/**
 * How to make HTTP requests using pure NodeJs
 */

const http = require('http')

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=40,-75&units=f`

// We have to listen for the response chunks. This module uses callbacks like 'data' or 'end'
// to determine when data is loaded in chunks. We have to call request.end() to actually run
// the request
const request = http.request(url, response => {
    let data = ''
    
    response.on('data', chunk => {
        data += chunk.toString() 
    })

    response.on('end', () => {
        console.log(data)
    })
})

request.on('error', error => {
    console.log(error)
})

request.end()