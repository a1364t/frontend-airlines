import React, { Component } from "react";
import FlightForm from "../components/FlightForm";
import FlightDisplay from "../components/FlightDisplay";

export class Flights extends Component {
	render() {
		return (
			<div>
				<FlightForm />
				<FlightDisplay />
			</div>
		);
	}
}

export default Flights;
