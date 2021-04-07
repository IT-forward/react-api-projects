import React from 'react';
import { Card } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
import '../App.css';
import PropTypes from 'prop-types';


const List = ({ results }) => {

    return (
        <CardColumns style={{ padding: 5 }} >
            {results.map((data, i) => (
                <Card
                    key={i}
                    bg='light'
                    text='dark'
                    className='text-center'
                >
                    <Card.Img className="cardImg" variant='top' src={data.countryInfo.flag} />
                    <Card.Body>
                        <Card.Title>{data.country}</Card.Title>
                        <Card.Text>Cases: {data.cases}</Card.Text>
                        <Card.Text>Deaths: {data.deaths}</Card.Text>
                        <Card.Text>Recovered: {data.recovered}</Card.Text>
                        <Card.Text>Today's cases: {data.todayCases}</Card.Text>
                        <Card.Text>Today's deaths: {data.todayDeaths}</Card.Text>
                        <Card.Text>Active: {data.active}</Card.Text>
                        <Card.Text>Critical: {data.critical}</Card.Text>
                    </Card.Body>
                </Card >
            ))}
        </CardColumns>
    )
}

List.propTypes = {
    results: PropTypes.array.isRequired,
}

export default List;
