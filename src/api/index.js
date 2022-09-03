import axios from 'axios';

export const getAirports = async(location) => {
    try {
        const { data } = await axios.get(`https://world-airports-directory.p.rapidapi.com/v1/airports/${location}`, {
            params: {
                page: '1', 
                limit: '8', 
                sortBy: 'AirportName:asc'
            },
            headers: {
              'X-RapidAPI-Key': 'f9f4818478msh32c4f4ad2b8e08ap132ccfjsn40a2d168b9d5',
              'X-RapidAPI-Host': 'world-airports-directory.p.rapidapi.com'
            }
          });
        return data;
    } catch (error) {
        console.log(error)
    }
}


const URL = 'https://skyscanner44.p.rapidapi.com/search'

export const getFlights = async(numAdults, start, dest, sDate, rDate, flightClass) => {
    try {
        const { data } = await axios.get(URL, {    
            params: {
              adults: numAdults,
              origin: start,
              destination: dest,
              departureDate: sDate,
              returnDate: rDate,
              cabinClass: flightClass,
              currency: 'CAD',
            },
            headers: {
              'X-RapidAPI-Key': 'f9f4818478msh32c4f4ad2b8e08ap132ccfjsn40a2d168b9d5',
              'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}

