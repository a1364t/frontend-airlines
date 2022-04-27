import React from "react";
import { NavLink } from "react-router-dom";

// navlinks here goes to pages route
function NavBar() {
	return (
		<div className="nav-container">
			<NavLink to={"/"}>
				<h2>Home</h2>
			</NavLink>
			<NavLink to={"/login"}>
				<h2>Login</h2>
			</NavLink>
			<NavLink to={"/signup"}>
				<h2>Sign up</h2>
			</NavLink>
			<NavLink to={"/reservations"}>
				<h2>Reservations</h2>
			</NavLink>
		</div>
	);
}

export default NavBar;
