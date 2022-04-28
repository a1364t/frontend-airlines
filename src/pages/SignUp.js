import axios from "axios";
import React, { Component } from "react";


const SERVER_URL = 'http://localhost:3000/users/new.json';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			email: "",
			password: "",
			password_confirmation: ""
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
			username: "",
			email: "",
			password: "",
			password_confirmation: ""
		});
	}

	componentDidMount() {
		const fetchLogin = () => {
			axios.post(SERVER_URL).then((response) => {
				console.log(response.data)
			});
		};
		fetchLogin();		
	}	


	render(){
		return(
			<div className="login_container">
				<form onSubmit={this.handleSubmit}>
					<input type="text"
						required
						name="username"
						onChange={this.handleChange}
						value={this.state.username}
						placeholder="username"
					/>
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

					<input type="text"
						required
						name="password_confirmation"
						onChange={this.handleChange}
						value={this.state.password_confirmation}
						placeholder="password confirmation"
					/>

					<input type="submit" value="Sign Up!" />
			</form>
			</div>
		);
	}
}

export default SignUp;
