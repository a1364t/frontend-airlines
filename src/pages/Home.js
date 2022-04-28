import React, { Component } from "react";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			origin: "",
			destination: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]:value,
		});		
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({
			origin: "",
			destination: ""
		});
	}

	render() {
		return(
			<div className="search_container">
				<form onSubmit={this.handleSubmit}>
					<input type="text"
						required
						name="origin"
						onChange={this.handleChange}
						value={this.state.origin}
						placeholder="From"
					/>
					<input type="text"
						required
						name="destination"
						onChange={this.handleChange}
						value={this.state.destination}
						placeholder="To"
					/>

					<input type="submit" value="Search Flight" />
			</form>
			</div>

		);

	}
}

export default Home;


