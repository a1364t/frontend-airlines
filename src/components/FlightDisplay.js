import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class FlightDisplay extends Component {
	constructor() {
		super();
		this.state = {
			flights: [
				{
					id: 1,
					date: "3/1/13",
					flight_number: "23",
					plane: "757",
					origin: "JFK",
					destination: "SFO",
				},
				{
					id: 2,
					date: "4/1/13",
					flight_number: "245",
					plane: "737",
					origin: "NYE",
					destination: "SFO",
				},
				{
					id: 3,
					date: "3/1/13",
					flight_number: "2324",
					plane: "767",
					origin: "SYD",
					destination: "SFO",
				},
			],
		};
	}

	render() {
		return (
			<div className="content">
				<h2 className="content-header">Flights:</h2>
				<div>
					{this.state.flights.map((flight) => {
						return (
							<div className="content-content">
								<h3>Date: {flight.date}</h3>
								<NavLink
									className="navlink-flights"
									to={`/flight/show/${flight.flight_number}`}
								>
									Flight: {flight.flight_number}
								</NavLink>
								<h3>
									From: {flight.origin} -To:{" "}
									{flight.destination}
								</h3>
								<h3>Plane: {flight.plane}</h3>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default FlightDisplay;
