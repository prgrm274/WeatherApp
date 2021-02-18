import React, { useState } from 'react';
import Suasana from './suasana/Suasana'
import classes from './suasana/WeatherModule.css';

// Objek kota London
const obj = {
    dt: 1592155233,
    id: 2643743,
    main: {
        temp: 71.8,
        feels_like: 66.69,
        temp_min: 71.01,
        temp_max: 73,
        pressure: 1014,
    },
    name: "London",
    sys: {
        type: 1,
        id: 1414,
        country: "GB",
        sunrise: 1592106173,
        sunset: 1592165939
    },
    timezone: 3600
}
// console.log(new Date(obj.dt * 1000 - (obj.timezone * 1000))); // minus 
// console.log(new Date(obj.dt * 1000 + (obj.timezone * 1000))); // plus

const Weather = () => {
    let [city, setCity] = useState('');
    // INITIAL UNIT VALUE WE USE imperial
    let [unit, setUnit] = useState('imperial');

    let [responseObj, setResponseObj] = useState({});

    // const uriEncodedCity = encodeURIComponent(city);

    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    function getForecast(e) {
        e.preventDefault();

        if (city.length === 0) {
            return setError(true);
        }
        // Clear state in preparation for new data
        setError(false);
        setResponseObj({});

        setLoading(true);

        let uriEncodedCity = encodeURIComponent(obj);
        // let uriEncodedCity = encodeURIComponent(city);
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "isi api key disini"
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.cod !== 200) {
                    throw new Error()
                }
                setResponseObj(response);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err.message);
            });
    }
    return (
        <div>
            <h2>Cek cuaca kota</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Kota:"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Celcius
                </label>
                <p>
                    <button className={classes.Button} type="submit">Get</button>
                </p>
            </form>
            <Suasana
                responseObj={responseObj}
                error={error}
                loading={loading}
            />
        </div>
   );
}
export default Weather;