import React from 'react';
import { Grid } from '@material-ui/core';
import FlightDetails from '../FlightDetails/FlightDetails';

const List = ({topFlights}) => {
    return (
        <div>
            <Grid container spacing={3} >
                {topFlights?.itineraries?.buckets?.map((allflights) => (
                        allflights.items.map((topflight,i) => (
                            <Grid item key={i} xs={12}>
                                <FlightDetails topflight={topflight}/>
                            </Grid>
                        ))
                ))}
            </Grid>
             
        </div>
    );
}

export default List;