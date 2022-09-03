import React, { useState} from 'react';
import { getFlights } from './api';

import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import Information from './components/Information/Information';
import List from './components/List/List';

const App = () => {

    const [flights, setFlights] = useState([]);

    const retrieveInfo = (numAdults, origin, destination, returnDate, startDate, flightClass, numChild) => {
        console.log(numAdults)
        console.log(origin)
        console.log(destination)
        console.log(returnDate)
        console.log(startDate)
        console.log(flightClass)
        console.log(numChild)
        getFlights(numAdults, origin, destination, startDate, returnDate, flightClass)
            .then((data) => {
                console.log(data);
                setFlights(data);
            })
        console.log(flights.itineraries)

    }

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%' }}>
                <Grid item xs={12} md={12}>
                    <Information retrieveInfo={retrieveInfo}/>
                    <List />
                </Grid>
            </Grid>
        </>
    )
}

export default App;