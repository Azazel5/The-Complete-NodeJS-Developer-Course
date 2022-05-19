const fs = require('fs')

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
        console.log("New note added!")
    }

    else {
        console.log("Note title taken!")
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
    addNote: addNote
}