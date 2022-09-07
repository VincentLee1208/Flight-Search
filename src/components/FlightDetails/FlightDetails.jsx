import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import './FlightDetails.scss';

const FlightDetails = ({topflight}) => {
    
    const leg1_ddate = topflight?.legs[0].departure;
    const leg2_ddate = topflight?.legs[1].departure;

    return (
        <Card elevation={6}>
            <CardContent>
                <div class="TicketContainer">
                    <div class="TicketLeft">
                        <div class="Leg1">
                            <div class="Carrier">
                                <p class="Carrier_Name">{topflight.legs[0].carriers.marketing[0].name}</p>
                                {
                                <img class="Carrier_Logo" alt="" src={topflight.legs[0].carriers.marketing[0].logoUrl}/> 
                                }
                            </div>
                            <div class="LegInfo">
                                <div class="LegInfo_Depart">
                                    {
                                        
                                     new Date(leg1_ddate.substring(0,10) + 
                                     " " + 
                                     leg1_ddate.substring(11,18)).toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
                                        
                                    }
                                </div>
                                <div class="LegInfo_Stops">

                                </div>
                                <div class="LegInfo_Return">

                                </div>
                            </div>
                        </div>
                        <div class="Leg2">
                            <div class="Carrier">
                                <p class="Carrier_Name">{topflight.legs[1].carriers.marketing[0].name}</p>
                                {
                                <img class="Carrier_Logo" alt="" src={topflight.legs[1].carriers.marketing[0].logoUrl}/> 
                                }
                            </div>
                            <div class="LegInfo">
                                <div class="LegInfo_Depart">
                                    { 
                                        new Date(leg2_ddate.substring(0,10) + 
                                        " " + 
                                        leg2_ddate.substring(11,18)).toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
                                           
                                       }
                                </div>
                                <div class="LegInfo_Stops">

                                </div>
                                <div class="LegInfo_Return">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ticketright">

                    </div>
                </div>
            </CardContent>
            
        </Card>
    );
}

export default FlightDetails;