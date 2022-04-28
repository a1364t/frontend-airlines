import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";
import Flights from "./Flights";
import Planes from "./Planes";
import Reservations from "./Reservations";
import Show from "./Show";

function Pages() {
	const location = useLocation();

	// pages controls the routes for all the display options
	// only change this file if your adding new routes. consult with team
	return (
		<>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/flights" element={<Flights />} />
				<Route path="/planes" element={<Planes />} />
				<Route path="/reservations" element={<Reservations />} />
				<Route path="flight/show/:id" element={<Show />} />
			</Routes>
		</>
	);
}

export default Pages;
