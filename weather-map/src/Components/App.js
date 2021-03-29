import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Response from './Response';

function App() {
    const [cityName, setCityName] = useState(null);

    const handleSubmit = (cityName) => {
        setCityName(cityName);
    }

    return (
        <div className="container mx-auto" id="app-width">
            <Header />
            <Form handleSubmit={handleSubmit} />
            <Response cityName={cityName} />
        </div>
    );
}

export default App;