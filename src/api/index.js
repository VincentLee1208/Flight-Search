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
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
              'X-RapidAPI-Host': 'world-airports-directory.p.rapidapi.com'
            }
          });
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getAllFlights = async(numAdults, start, dest, sDate, rDate, flightClass) => {
    try {
        const { data } = await axios.get('https://skyscanner44.p.rapidapi.com/search-extended', {    
            params: {
              adults: numAdults,
              origin: start,
              destination: dest,
              departureDate: sDate,
              returnDate: rDate,
              cabinClass: flightClass,
              currency: 'CAD',
              stops: '0,1,2',
              duration: '50',
              startFrom: '00:00',
              arriveTo: '23:59',
              returnStartFrom: '00:00',
              returnArriveTo: '23:59'
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
              'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getTopFlights = async(numAdults, start, dest, sDate, rDate, flightClass) => {
    try {
        const { data } = await axios.get('https://skyscanner44.p.rapidapi.com/search', {    
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
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
              'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}

