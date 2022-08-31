import React, { useState } from 'react';
import { getAirports } from './../../api';

const Information = () => {
    const [airports, setAirports] = useState([]);
    const [timer, setTimer] = useState(null);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');


    const handleOriginChange = (e) => {
        setOrigin(e.target.value)
        console.log({origin})
        
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            getAirports(origin)
                .then((data) => {
                    console.log(data.results);

                    setAirports(data.results);
                })
        }, 800);

        setTimer(newTimer)
        
    }

    const setOriginAirport = (e) => {
        setOrigin(e.target.value)
        console.log(e.target.value)
        setAirports([]);
    }

    const handleDestChange = (e) => {
        setDestination(e.target.value)
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            console.log({destination})
        }, 500);

        setTimer(newTimer)
    }

    return (
        <form>
            <input placeholder="From ..." type="text" id="origin" name="origin" onChange={handleOriginChange} value={origin} />
            {airports.length > 0 ? 
            airports.map((airport) => {
                return <button style={{display: 'block', width: '20%', height: '5%', textAlign: 'left'}} value={airport.AirportCode} onClick={setOriginAirport}>{airport.AirportName} {airport.AirportCode}</button>
            }) : <div>{airports.length}</div>    
            }
            <input placeholder="To ..." type="text" id="destination" name="destination" onChange={handleDestChange}/>
        </form>
    );
}

export default Information;