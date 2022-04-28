import React, { Component } from "react";
import axios from "axios";


const SERVER_URL = 'http://localhost:3000/login.json';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",			
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
			email: "",
			password: "",						
		});
		
	}




	render(){
		return(
			<div className="login_container">
				<form onSubmit={this.handleSubmit}>
					<input type="text"
						required
						name="email"
						onChange={this.handleChange}
						value={this.state.email}
						placeholder="email"
					/>
					<input type="text"
						required
						name="password"
						onChange={this.handleChange}
						value={this.state.password}
						placeholder="password"
					/>


					<input type="submit" value="Login!" />
			</form>
			</div>
		);
	}
}

export default Login;