import React, { Component } from "react";

class FlightDisplay extends Component {
    constructor() {
        super();
        this.state ={
            flights: {"id" :1, "date" :"3/1/13", "flight_number" :"23", "plane" :"757", "origin" :"JFK", "destination" :"SFO"}
        }
    }

    render() {
        return (
            <div className='flight_content'>
                <h2>Flights</h2>                 
                <h3>Date: {this.state.flights.date}</h3>
                <h3>Flight: {this.state.flights.flight_number}</h3>
                <h3>From - TO: {this.state.flights.origin} to {this.state.flights.destination}</h3>
                <h3>Plane: {this.state.flights.plane}</h3>              
            </div>
        );
    }
}

export default FlightDisplay;
>>>>>>> 5ff3c5f7a09451995b6a49b3419086c24a5038af
