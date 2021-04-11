import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DesIcon from './DesIcon';

Response.propTypes = {
    cityName: PropTypes.string.isRequired,
}

function Response(props) {
    const [temp, setTemp] = useState(null);
    const [description, setDescription] = useState(null);
    const [cityName, setCityName] = useState(null);

    const name = props.cityName;
    const url = 'https://api.openweathermap.org/data/2.5/weather?';
    const apiKey = '2d60f525cd75dd81b166855758cb0334';
    const urlToFetch = `${url}q=${name}&appid=${apiKey}`;

    async function getWeatherInfo(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const jsonResponse = await response.json();
                const fixedTemp = Math.round(jsonResponse.main.temp - 273.15);
                setTemp(fixedTemp + '°C');
                setDescription(jsonResponse.weather[0].description);
                setCityName(jsonResponse.name);
            }
            else {
                throw new Error('Request Failed!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => getWeatherInfo(urlToFetch));

    return (
        <div className="d-flex justify-content-center w-50 mx-auto mt-5">
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-danger text-center">{cityName}</h1>
                <h1 className="text-secondary text-center">{temp}</h1>
                <h2 className="text-secondary text-center">{description}</h2>
                <DesIcon Description={description} />
            </div>
        </div>
    );
}

export default Response;