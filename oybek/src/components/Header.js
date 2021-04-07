import React from 'react'
import PropTypes from 'prop-types';
import '../App.css';

const Header = ({ title }) => {
    return (
        <header className='text-center'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'COVID-19 Statistics',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
