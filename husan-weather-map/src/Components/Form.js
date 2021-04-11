import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// Form.propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
// }

function Form(props) {
    const [inputValue, setInputValue] = useState(null);

    const handleChange = ({ target }) => {
        const { value } = target;
        setInputValue(value);
    }

    const submitForm = () => {
        props.handleSubmit(inputValue);
    }

    return (
        <div className="container">
            <form
                onSubmit={(event) => event.preventDefault()}
                className="row d-flex justify-content-center"
            >
                <div className="col-sm-10">
                    <input
                        className="form-control"
                        id="cityName"
                        type="text"
                        name="cityName"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Enter any city name"
                    />
                </div>
                <div className="col-sm-2 d-flex justify-content-center">
                    <button
                        className="btn btn-primary ml-xl-n5 ml-md-n3"
                        id="form-btn"
                        onClick={() => submitForm()}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;