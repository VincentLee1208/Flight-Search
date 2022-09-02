import React, { useState } from 'react';
import { getAirports } from './../../api';
import './Information.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const Information = () => {
    const [airportsOrigin, setOriginAirports] = useState([]);
    const [airportsDest, setDestAirports] = useState([]);
    const [timer, setTimer] = useState(null);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const [startDate, setStartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());

    const [seeDrop, setSeeDrop] = useState(true);

    const [flightClass, setFlightClass] = useState('economy');
    const [numAdults, setNumAdults] = useState(1);
    const [numChild, setNumChild] = useState(0);

    const [arrayChild, setArrayChild] = useState([]);



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

    //Can maybe turn inline instead after to test if works
    const MinusAdultPassenger = () => {
        var adults = numAdults
        adults--
        setNumAdults(adults)
    }

    const AddAdultPassenger = () => {
        var adults = numAdults
        adults++
        setNumAdults(adults)
    }

    const MinusChildPassenger = () => {
        var children = numChild
        children--
        setNumChild(children)

        var childArray = arrayChild
        childArray.pop()
        setArrayChild(childArray)
    }

    const AddChildPassenger = () => {
        var children = numChild
        children++
        setNumChild(children)

        var childArray = arrayChild
        childArray.push('0')
        setArrayChild(childArray)
    }

    const AddChildArray = (e, index) => {
        var childArray = arrayChild
        childArray[index] = e.target.value
        setArrayChild(childArray)
        console.log(arrayChild)
    }
    
    const createSelect = (child) => {
        let options = []
        for (let i = 0; i<16; i++) {
            var option;
            if(child === i.toString()) {
                option = <option key={i} value={i} selected="selected">{i}</option>;
            } else {
                option = <option key={i} value={i}>{i}</option>;
            }
            options.push(option)
        }
        return options;
    }

    return (
        <form>
            <table>
                <tr>
                    <td>
                        <h5>From: </h5>
                    </td>
                    <td>

                    </td>
                    <td>
                        <h5>To: </h5>
                    </td>
                    <td>
                        <h5>Depart: </h5>
                    </td>
                    <td>
                        <h5>Return: </h5>
                    </td>
                    <td>
                        <h5>Cabin Class & Travelers</h5>
                    </td>
                </tr>
                <tr>
                    <td id='input'>
                        <input type="text" id="origin" name="origin" onChange={handleOriginChange} value={origin} />
                    </td>
                    <td>
                        <SwapHorizIcon id="icon" onClick={swapLocations} />
                    </td>
                    <td id='input'>
                        <input type="text" id="destination" name="destination" onChange={handleDestChange} value={destination}/>
                    </td>
                    <td id='input'>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                    </td>
                    <td id='input'>
                        <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)}/>
                    </td>
                    <td id='input'>
                        <button type="button" id="dropbutton" onClick={() => setSeeDrop(!seeDrop)}>{flightClass}</button> 
                    </td>
                </tr>
                <tr>
                    <td id='input'>
                        {airportsOrigin.length > 0 ? 
                        airportsOrigin.map((airport) => {
                            return <button value={airport.AirportCode} onClick={setOriginAirport}>{airport.AirportName} {airport.AirportCode}</button>
                        }) : <div></div>    
                        }
                    </td>
                    <td></td>
                    <td id='input'>
                        {airportsDest.length > 0 ?
                        airportsDest.map((airport) => {
                            return <button value={airport.AirportCode} onClick={setDestAirport}>{airport.AirportName} {airport.AirportCode}</button>
                        }) : <div></div>
                        }
                    </td>
                    <td></td>
                    <td colspan="2">
                        {seeDrop ? <></> : 
                        <div id="drop">
                            <div id='dropdown'>
                                <h4>Cabin class</h4>
                                <select onChange={(e) => setFlightClass(e.target.value)}>
                                    <option value='economy'>Economy</option>
                                    <option value='premiumeconomy'>Premium Economy</option>
                                    <option value='business'>Business Class</option>
                                    <option value='first-class'>First-Class</option>
                                </select>

                                <h4>Adults(16+)</h4>
                                <table>
                                    <tr>
                                        <td id="passengers">
                                            {numAdults === 1 ? 
                                            <RemoveCircleIcon id="circleIcon"/> : 
                                            <RemoveCircleOutlineIcon id="circleIcon" onClick={MinusAdultPassenger}/>
                                            }
                                        </td>
                                        <td>
                                            <h2>{numAdults}</h2>
                                        </td>
                                        <td id="passengers">
                                            {numAdults === 8 ?
                                            <AddCircleIcon id="circleIcon"/>:
                                            <AddCircleOutlineIcon id="circleIcon" onClick={AddAdultPassenger}/>
                                            }
                                        </td>
                                    </tr>
                                </table>

                                <h4>Children(0-15)</h4>
                                <table>
                                    <tr>
                                        <td id="passengers">
                                            {numChild === 0 ? 
                                            <RemoveCircleIcon id="circleIcon"/> : 
                                            <RemoveCircleOutlineIcon id="circleIcon" onClick={MinusChildPassenger}/>
                                            }
                                        </td>
                                        <td>
                                            <h2>{numChild}</h2>
                                        </td>
                                        <td id="passengers">
                                            {numChild === 8 ?
                                            <AddCircleIcon id="circleIcon"/>:
                                            <AddCircleOutlineIcon id="circleIcon" onClick={AddChildPassenger}/>
                                            }
                                        </td>
                                    </tr>
                                </table>

                                {arrayChild.length > 0 ?
                                arrayChild.map((child, index) => {
                                    return (
                                        <div>
                                            <h4>Age of Child {index+1}</h4>
                                            <select onClick={(e) => AddChildArray(e, index)}>
                                                {createSelect(child)}
                                            </select>                                            
                                        </div>
                                        )
                                }) : <></>
                                }
                            </div>
                        </div>
                        }
                    </td>
                </tr>
            </table>
        </form>
        


    );
}

export default Information;