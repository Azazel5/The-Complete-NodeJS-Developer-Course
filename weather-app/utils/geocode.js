const request = require('request')

// Geocoding

// Use callbacks to make functions reusable. In the example below, (and in Dibs when you created
// the error callback), allowing users to do different things with the error/success case would be
// helpful! This is where the power of callbacks shine.
const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=${process.env.GEOCODING_API_KEY}&limit=1`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to geocoding service!', undefined)
        }

        else if (body.features.length === 0) {
            callback('No matching results found!', undefined)
        }

        else {
            const result = body.features[0]
            callback(undefined, {
                latitude: result.center[1],
                longitude: result.center[0],
                location: result.place_name
            })
        }
    })
}

module.exports = geoCode