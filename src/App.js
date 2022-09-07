import React, { useEffect, useState } from 'react';
import { getAllFlights, getTopFlights } from './api';

import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import Information from './components/Information/Information';
import List from './components/List/List';
import Filters from './components/Filters/Filters';

const App = () => {
    const [topFlights, setTopFlights] = useState([]);
    const [allFlights, setAllFlights] = useState([]);

    const retrieveInfo = (numAdults, origin, destination, returnDate, startDate, flightClass, numChild) => {
        /*
        console.log(numAdults)
        console.log(origin)
        console.log(destination)
        console.log(returnDate)
        console.log(startDate)
        console.log(flightClass)
        console.log(numChild)
        
        
        getAllFlights(numAdults, origin, destination, startDate, returnDate, flightClass)
            .then((data) => {
                //console.log(data);
                setAllFlights(data);
            })
        */
        

        getTopFlights(numAdults, origin, destination, startDate, returnDate, flightClass)
            .then((data) => {
                console.log(data);
                if(data !== topFlights) {
                    setTopFlights(data);
                }
            })
    }

    useEffect(() => {
        console.log("Changed topflights")
        console.log(topFlights)
    }, [topFlights])

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%' }}>
                <Grid item xs={12} md={12}>
                    <Information retrieveInfo={retrieveInfo}/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Filters/>
                </Grid>
                <Grid item xs={12} md={9}>
                    <List 
                        topFlights = {topFlights}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App;