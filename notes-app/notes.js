const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notesArray = loadNotes()
    const duplicateNote = notesArray.find(note => note.title === title)

    if (!duplicateNote) {
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

const removeNote = (title) => {
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

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    notes.forEach(note => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToBeRead = notes.find(note => note.title === title)

    if (noteToBeRead) {
        console.log(chalk.inverse(noteToBeRead.title))
        console.log(noteToBeRead.body)
    }

    else {
        console.log(chalk.red.inverse("No note found :("))
    }
}

const saveNotes = (notesArray) => {
    const dataJSON = JSON.stringify(notesArray)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}