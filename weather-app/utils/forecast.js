const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${latitude},${longitude}&units=f`

    request({ url: weatherUrl, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        }

        else if (response.body.error) {
            callback("Unable to find location", undefined)
        }

        else {
            const currentWeather = response.body.current
            callback(undefined, `${currentWeather.weather_descriptions[0]}. It is currently ${currentWeather.temperature} degrees out. There is ${currentWeather.precip}% chance of rain.`)
        }
    })
}

module.exports = forecast