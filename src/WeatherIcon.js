import React from "react";
import sun from './img/weather app iconpack/sun.png';
import night from './img/weather app iconpack/half-moon.png';
import mistNight from "./img/weather app iconpack/foggy-night.png"
import mistDay from "./img/weather app iconpack/foggy-day.png"
import snowNight from "./img/weather app iconpack/snowy (2).png";
import snowDay from "./img/weather app iconpack/snowy (1).png";
import thunderstormNight from "./img/weather app iconpack/thunderstorm (1).png";
import thunderstormDay from "./img/weather app iconpack/thunderstorm (2).png";
import cloudsDay from "./img/weather app iconpack/cloudy-day.png";
import cloudsNight from "./img/weather app iconpack/cloudy-night.png";
import scatteredClouds from './img/weather app iconpack/free-icon-clouds-704743.png';
import rainDay from './img/weather app iconpack/heavy-rain (1).png';
import rainNight from './img/weather app iconpack/heavy-rain (2).png';
import rainyDay from './img/weather app iconpack/heavy-rain (3).png';
import rainyNight from './img/weather app iconpack/heavy-rain.png';
import brokenClouds from "./img/weather app iconpack/cloud.png";



const WeatherIcon = ({ weatherCode }) => { 

    const getIconFile = (code) => {
        switch (code) {
            case "01d":
                return sun; // clear sky day
            case "01n":
                return night; // clear sky night
            case "02d":
                return cloudsDay; // few clouds day
            case "02n":
                return cloudsNight; // few clouds night
            case "03d":
                return scatteredClouds; // scattered clouds day
            case "03n":
                return scatteredClouds; // scattered clouds night
            case "04d":
                return brokenClouds; // broken clouds day
            case "04n":
                return brokenClouds; // broken clouds night
            case "09d":
                return rainDay; // shower rain day
            case "09n":
                return rainNight; // shower rain night
            case "10d":
                return rainyDay; // rain day
            case "10n":
                return rainyNight; // rain night
            case "11d":
                return thunderstormDay; // thunderstorm day
            case "11n":
                return thunderstormNight; // thunderstorm night
            case "13d":
                return snowDay; // snow day
            case "13n":
                return snowNight; // snow night
            case "50d":
                return mistDay; // mist day
            case "50n":
                return mistNight; // mist night
            default:
                return "-"; // Default icon for unknown conditions
        }
    };

    const iconFile = getIconFile(weatherCode);

    return <img src={iconFile}/>;
};

export default WeatherIcon;
