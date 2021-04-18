import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardTop = () => {
    const url = "https://corona.lmao.ninja/v2/all";

    const [global, setGlobal] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(url).then(res => res.json());
            setGlobal(data);
        }
        fetchData();

    }, []);

    const date = new Date(parseInt(global.updated));
    const lastUpdated = date.toString();



    return (
        <CardDeck style={{ margin: 0 }} >
            <Card bg='secondary' text={'white'} className='text-center' style={{ margin: '10px' }}>
                <Card.Body>
                    <Card.Title>Cases</Card.Title>
                    <Card.Text data-testid="cases-n">
                        {global.cases}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>Last updated {lastUpdated}</small>
                </Card.Footer>
            </Card>
            <Card bg="danger" text={'white'} className='text-center' style={{ margin: '10px' }}>
                <Card.Body>
                    <Card.Title>Deaths</Card.Title>
                    <Card.Text data-testid="deaths-n">
                        {global.deaths}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>Last updated {lastUpdated}</small>
                </Card.Footer>
            </Card>
            <Card bg='success' text={'white'} className='text-center' style={{ margin: '10px' }}>
                <Card.Body>
                    <Card.Title>Recovered</Card.Title>
                    <Card.Text data-testid="recovered-n">
                        {global.recovered}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>Last updated {lastUpdated}</small>
                </Card.Footer>
            </Card>
        </CardDeck >
    )
}

export default CardTop;
