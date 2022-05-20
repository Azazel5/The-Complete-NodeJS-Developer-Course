/** PLAYGROUND BEGINS HERE */
const getNotes = function () {
    return "Your notes..."
}

// const fs = require('fs')
// const json = fs.readFileSync('../dummy.json').toString()
// const jsonjson = JSON.parse(json)
// jsonjson.name = "Subhanga"
// jsonjson.age = 22
// const newString = JSON.stringify(jsonjson)
// fs.writeFileSync('../dummy.json', newString)

// const event = {
//     name: "party",
//     guestList: ['Andrew', 'Subhanga', 'Leah'],
//     printGuestList() {
//         this.guestList.forEach(guest => console.log(guest, "is attending", this.name))
//     }
// }

// event.printGuestList()

//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],

    getTasksToDo() {
        return this.tasks.filter(task => !task.completed)
    }
}

console.log(tasks.getTasksToDo())

module.exports = getNotes

/** NOTES START HERE */
// fs.writeFileSync has a readFileSync alternative for reading files (ovviamente)

// Arrow functions don't bind their own "this" keyword! If you want to use "this", don't
// use an arrow function; use a standard. Also, you can use an alternative style of defining
// functions in objects AKA how you define functions within classes, with no function keyword.
// This thing can get pretty tricky. If you have a forEach loop in that printGuestList function,
// and you pass a standard function to it, that will have its own "this" binding. However, that
// is not what we want since we want to access the "this" word for its parent function i.e. the
// printGuestList function. This is why passing an anonymous arrow to the forEach works in this case.

// TLDR; arrow function don't bind their own "this". They access the "this" of the context in which
// they're created.

