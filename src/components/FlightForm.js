import React, { Component } from "react";

export class FlightForm extends Component {
	constructor() {
		super();
		this.state = {
			flightNo: "",
			date: "",
			destination: "",
			origin: "",
			plane: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state);
		// allows reset of search field after submit
		this.setState({
			flightNo: "",
			date: "",
			destination: "",
			origin: "",
			plane: "",
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					required
					name="flightNo"
					onChange={this.handleChange}
					value={this.state.flightNo}
					placeholder="Flight#"
				/>
				<input
					type="text"
					required
					name="date"
					onChange={this.handleChange}
					value={this.state.date}
					placeholder="date"
				/>
				<input
					type="text"
					required
					name="destination"
					onChange={this.handleChange}
					value={this.state.destination}
					placeholder="Destination"
				/>
				<input
					type="text"
					required
					name="origin"
					onChange={this.handleChange}
					value={this.state.origin}
					placeholder="Origin"
				/>
				<input
					type="text"
					required
					name="plane"
					onChange={this.handleChange}
					value={this.state.plane}
					placeholder="Plane"
				/>
				<input type="submit" value="Find Flight" />
			</form>
		);
	}
}

export default FlightForm;
