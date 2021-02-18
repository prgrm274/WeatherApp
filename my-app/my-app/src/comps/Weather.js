import React, { useState } from 'react';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});

    function getForecast() {
        // weather data fetch function will go here
        
    }
    return (
        <div>
            <h2>Cek cuaca kota</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getForecast}>Get</button>
        </div>
   );
}
export default Forecast;