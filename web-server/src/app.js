// Core modules
const path = require('path')

// NPM modules
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, '../public')))

// Rendering HTML/JSON/strings using the res.send is all A-ok
// Pass in an object/array 
app.get('/help', (req, res) => {
    res.send([
        { help: 'HAHA' },
        { help: 'SO EZ!!' }
    ])
})

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Here comes the sun',
        location: 'Boston, MA'
    })
})

app.listen(3000, () => {
    console.log("Application started on port 3000")
})