// NPM packages
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

// Custom packages
const getNotes = require('./notes')

/** The process global variable has access to command line arguments. The first two
 * arguments are path related mumbo jumbo (path to NodeJS and the main file) */

/** Yargs for command line parsing. The version number can be customized */
yargs.version('999')

yargs.command({
    command: "add",
    "describe": "Add a new note",
    handler: function () {
        console.log("Adding a new note!")
    }
})

yargs.command({
    command: "remove",
    "describe": "Remove a note",
    handler: function () {
        console.log("Removing a new note!")
    }
})

yargs.command({
    command: "list",
    "describe": "List all notes",
    handler: function () {
        console.log("All notes")
    }
})

yargs.command({
    command: "read",
    "describe": "Read a note",
    handler: function () {
        console.log("Reading a note")
    }
})

console.log(yargs.argv)


