const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was created by NodeJS')

fs.appendFileSync('notes.txt', "\nHere's some appended text")