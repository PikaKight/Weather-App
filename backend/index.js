const express = require("express");

const {getWeatherCity} = require('./weather');

require("dotenv").config();

const app = express();

app.use(express.json());

app.get('/city', async (req, res) => {

    let refinedDatas = [];

    const data = await getWeatherCity(req.body.city, req.body.country);

    for (var i=0; i < data.list.length; i++){
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

        refinedData['weather'] = data.list[i]["weather"][0]["description"]
        refinedData['currentTemp'] = data.list[i]["temp"]["day"]
        refinedData['minTemp'] = data.list[i]["temp"]["min"]
        refinedData['maxTemp'] = data.list[i]["temp"]["max"]
        refinedData['windSpeed'] = data.list[i]["speed"]
        refinedData['precipitation'] = data.list[i]["pop"]*100
        refinedData['humidity'] = data.list[i]["humidity"]

        refinedDatas.push(refinedData);
    }

})

const port = process.env.PORT || 5501;
app.listen(port, () => console.log(`listing to port ${port}`));