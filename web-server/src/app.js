// Core modules
const path = require('path')

// NPM modules
const express = require('express')
const app = express()

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))

// Rendering HTML/JSON/strings using the res.send is all A-ok
// Pass in an object/array 
// While using Handlebar, we use render to render a template

// The render function gets an additional argument which is similar to Django's context
// passing mechanism i.e. pass information from the Node side to the templates!
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Subhanga Upadhyay'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Help! I need somebody!'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Subhanga Upadhyay'
    })
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