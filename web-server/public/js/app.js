function makeRequest(e) {
    e.preventDefault()

    const location = document.querySelector('input').value
    const p1 = document.querySelector('p.p1')
    const p2 = document.querySelector('p.p2')

    p1.textContent = 'Loading...'
    p2.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`)
        .then(response => response.json())
        .then(data => {
            const { error, location, forecast } = data

            if (error) {
                p1.textContent = error
            }

            else {
                p1.textContent = location
                p2.textContent = forecast
            }

        })
}

const weatherForm = document.querySelector('form')
weatherForm.addEventListener('submit', makeRequest)