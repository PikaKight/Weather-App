require('dotenv').config();
const countries = require("i18n-iso-countries");


async function getWeatherCity(city, country){

    let countryCode = countries.getAlpha2Code(country, "en")

    console.log(countryCode)

    let param = `q=${city},${countryCode}&cnt${7}&appid=${process.env.API_KEY}`

    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?${param}`

    console.log(url)

    await fetch(url)
    .then((res) => {

        return res.json()
    })
    .then((data) => {

        console.log(data)

        return data
    })
    .catch((error) => {
        console.log(error);
    })
}

async function getWeatherZip(zip, country){

    let countryCode = await fetch()


    let param = `q=${zip}, ${countryCode}&cnt${7}&appid=${process.env.API_KEY}`

    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?${param}`

    await fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error);
    })
}

getWeatherCity('Toronto', 'Canada')