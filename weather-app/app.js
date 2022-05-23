// Custom Packages
require('dotenv').config()

// 3rd party packages
const request = require('request')

const weatherUrl = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=29.4254,-98.4946&units=f`

request({ url: weatherUrl, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to weather service!")
    }

    else if (response.body.error) {
        console.log("Unable to find location")
    }

    else {
        const currentWeather = response.body.current
        console.log(`${currentWeather.weather_descriptions[0]}. It is currently ${currentWeather.temperature} degrees out. There is ${currentWeather.precip}% chance of rain.`)
    }
})

// Geocoding
const searchText = encodeURI("San Antonio")
const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${process.env.GEOCODING_API_KEY}&limit=1`

request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to geocoding service!")
    }

    else if (response.body.features.length === 0) {
        console.log("No matching results found!")
    }

    else {
        const geographicalCenter = response.body.features[0].center
        console.log("Latitude:", geographicalCenter[1], "Longitude:", geographicalCenter[0])
    }
})