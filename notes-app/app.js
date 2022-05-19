// NPM packages
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

// Custom packages
const notes = require('./notes')

/** The process global variable has access to command line arguments. The first two
 * arguments are path related mumbo jumbo (path to NodeJS and the main file) */

/** Yargs for command line parsing. The version number can be customized */
yargs.version('999')

/** Yargs provides the ability to demand arguments, check their types, etc */
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function () {
        console.log("Removing a new note!")
    }
})

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: function () {
        console.log("All notes")
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function () {
        console.log("Reading a note")
    }
})

yargs.parse()

