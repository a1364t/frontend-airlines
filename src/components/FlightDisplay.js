import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class FlightDisplay extends Component {
	constructor() {
		super();
		this.state = {
			flights: {
				id: 1,
				date: "3/1/13",
				flight_number: "23",
				plane: "757",
				origin: "JFK",
				destination: "SFO",
			},
		};
	}

	render() {
		return (
			<div className="content">
				<h2 className="content-header">Flights:</h2>
				<div className="content-content">
					<h3>Date: {this.state.flights.date}</h3>
					<NavLink
						className="navlink-flights"
						to={`/flight/show/${this.state.flights.flight_number}`}
					>
						Flight: {this.state.flights.flight_number}
					</NavLink>
					<h3>
						From: {this.state.flights.origin} -To:{" "}
						{this.state.flights.destination}
					</h3>
					<h3>Plane: {this.state.flights.plane}</h3>
				</div>
			</div>
		);
	}
}

export default FlightDisplay;
