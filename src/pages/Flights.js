import React, { Component } from "react";
import axios from "axios";
import FlightForm from "../components/FlightForm";
import FlightDisplay from "../components/FlightDisplay";
const FLIGHT_URL = "http://localhost:3000/flight";

export class Flights extends Component {
	constructor() {
		super();
		this.state = {};
	}

	// might need work
	findFlights(content) {
		axios.get(FLIGHT_URL, content).then((response) => {
			console.log(response);
			this.setState(response.data);
		});
	}
	render() {
		return (
			<div>
				<FlightForm onSubmit={this.findFlights} />
				<FlightDisplay flights={this.state} />
			</div>
		);
	}
}

export default Flights;
