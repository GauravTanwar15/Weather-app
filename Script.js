
require('dotenv').config();
let weather = {
    apiKey: Process.env.APIKEY,
    fetchWeather: function(city) {
        fetch(
           "http://api.openweathermap.org/data/2.5/weather?q=" 
        + city
        + "&units=metric&appid=" 
        + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
    displayWeather: function(data) {

    }
};