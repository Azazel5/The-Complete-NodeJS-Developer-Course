// NPM packages
const validator = require('validator')

// Custom packages
const getNotes = require('./notes')

console.log(getNotes())
console.log(validator.isEmail("andrew@example.com"))
console.log(validator.isURL("andrew@example"))