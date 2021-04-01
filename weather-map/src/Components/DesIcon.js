import React, { useState, useEffect } from 'react';
import ModerateRain from './Icons/ModerateRain';
import Rain from './Icons/Rain';
import Cloud from './Icons/Cloud';
import ClearSky from './Icons/ClearSky';
import Sunny from './Icons/Sunny';
import PropTypes from 'prop-types';

DesIcon.propTypes = {
    Description: PropTypes.string.isRequired,
}

function DesIcon(props) {
    const [icon, setIcon] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        setDescription(props.Description);
    });

    useEffect(() => {
        if (description !== null) {
            if (description.includes('sky')) {
                setIcon(<ClearSky />);
            }

            if (description.includes('light rain')) {
                setIcon(<ModerateRain />);
            }

            if (description.includes('rain') && !description.includes('light')) {
                setIcon(<Rain />);
            }

            if (description.includes('sunny')) {
                setIcon(<Sunny />);
            }

            if (description.includes('cloud')) {
                setIcon(<Cloud />);
            }
        }
    }, [description]);

    return (
        <div>
            <div>{icon}</div>
        </div>
    );
}

export default DesIcon;