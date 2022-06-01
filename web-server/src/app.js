// Core modules
const path = require('path')

// NPM modules
const express = require('express')
const hbs = require('hbs')

const app = express()

// Express looks for a "views" subdirectory where all the templates live. It can be customized
// Handlebars settings. Nodemon doesn't restart the hbs files on change, but you can add a tweak
// to the normal nodemon command to handle that as well i.e. the -e AKA extension flag. This'll
// make nodemon watch for changes in particular file extensions
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

// Setup static directory
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
        title: 'Help Page',
        helpText: 'Help! I need somebody!',
        name: 'Subhanga Upadhyay'
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