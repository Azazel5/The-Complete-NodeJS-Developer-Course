const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notesArray = loadNotes()
    const duplicateNotes = notesArray.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notesArray.push({
            title: title,
            body: body
        })


        saveNotes(notesArray)
        console.log(chalk.green.inverse("New note added!"))
    }

    else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const removeNote = function (title) {
    const notesArray = loadNotes()
    const filteredArray = notesArray.filter(note => note.title !== title)

    if (notesArray.length !== filteredArray.length) {
        saveNotes(filteredArray)
        console.log(chalk.green.inverse("Note removed!"))
    }

    else {
        console.log(chalk.red.inverse("No note found!"))
    }
}

const saveNotes = function (notesArray) {
    const dataJSON = JSON.stringify(notesArray)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}