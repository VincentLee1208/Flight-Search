import React, { useState } from 'react';
import { getAirports } from './../../api';
import './Information.css';

import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const Information = () => {
    const [airportsOrigin, setOriginAirports] = useState([]);
    const [airportsDest, setDestAirports] = useState([]);
    const [timer, setTimer] = useState(null);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');


    const handleOriginChange = (e) => {
        setOrigin(e.target.value)
        console.log({origin})
        
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            getAirports(e.target.value)
                .then((data) => {
                    console.log(data.results);

                    setOriginAirports(data.results);
                })
        }, 800);

        setTimer(newTimer)
        
    }

    const handleDestChange = (e) => {
        setDestination(e.target.value)
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            getAirports(e.target.value)
                .then((data) => {
                    console.log(data.results);
                    setDestAirports(data.results);
                })
        }, 800);

        setTimer(newTimer)
    }

    const setOriginAirport = (e) => {
        setOrigin(e.target.value)
        console.log(e.target.value)
        setOriginAirports([])
    }


    const setDestAirport = (e) => {
        setDestination(e.target.value)
        console.log(e.target.value)
        setDestAirports([])
    }

    const swapLocations = () => {
        var start = origin
        setOrigin(destination)
        setDestination(start)
    }

    return (
        <form>
            <h5>From: </h5>
            <input type="text" id="origin" name="origin" onChange={handleOriginChange} value={origin} />
            {airportsOrigin.length > 0 ? 
            airportsOrigin.map((airport) => {
                return <button value={airport.AirportCode} onClick={setOriginAirport}>{airport.AirportName} {airport.AirportCode}</button>
            }) : <div></div>    
            }
            <SwapHorizIcon id="icon" onClick={swapLocations} />

            <h5>To: </h5>
            <input type="text" id="destination" name="destination" onChange={handleDestChange} value={destination}/>
            {airportsDest.length > 0 ?
            airportsDest.map((airport) => {
                return <button value={airport.AirportCode} onClick={setDestAirport}>{airport.AirportName} {airport.AirportCode}</button>
            }) : <div></div>
            }
        </form>
    );
}

export default Information;