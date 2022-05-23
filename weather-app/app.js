// Custom Packages
require('dotenv').config()
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// App code
const location = process.argv[2]

if (!location) {
    return console.log("No location provided!")
}

geoCode(location, (geoCodeError, geoCodeData) => {
    if (geoCodeError) {
        return console.log(geoCodeError)
    }

    forecast(geoCodeData.latitude, geoCodeData.longitude, (forecastError, forecastData) => {
        if (forecastError) {
            return console.log(forecastError)
        }

        console.log(geoCodeData.location)
        console.log(forecastData)
    })

})