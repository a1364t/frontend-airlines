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
		console.log(this.state.email)
		this.props.onSubmit(this.state.name);
		
		this.setState({
			email: "",
			password: "",						
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