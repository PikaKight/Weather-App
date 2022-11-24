const express = require("express");
const {parse} = require('csv-parse');
const fs = require('fs');
const path = require('path');

const {getWeatherCity} = require('./weather');

require("dotenv").config();

const app = express();

app.use(express.json());

app.get('/city', async (req, res) => {

    let refinedData = {
        day,
        weather,
        currentTemp,
        minTemp,
        maxTemp,
        windSpeed,
        precipitation,
        humidity
    };

    const data = await getWeatherCity(req.body.city, req.body.country);

    for (var i=0; i < data.list.length; i++){
        refinedData['weather'] = data.list[i]["weather"][0]["description"]
        refinedData['currentTemp'] = data.list[i]["temp"]["[0]["description"]"]
    }

})