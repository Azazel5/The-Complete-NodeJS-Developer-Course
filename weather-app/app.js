// Custom Packages
require('dotenv').config()
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// App code
const location = process.argv[2]

if (!location) {
    console.log("No location provided!")
}

else {
    // If you destructure right here, this code will crash in the case of an error
    // because the response body will not contain latitude or other properties. ES6
    // offers a way to solve that by giving the ability to pass default values to
    // destructured content, as shown in the geoCode function call below.
    geoCode(location, (geoCodeError, { latitude, longitude, location } = {}) => {
        if (geoCodeError) {
            return console.log(geoCodeError)
        }

        forecast(latitude, longitude, (forecastError, forecastData) => {
            if (forecastError) {
                return console.log(forecastError)
            }

            console.log(location)
            console.log(forecastData)
        })

    })
}