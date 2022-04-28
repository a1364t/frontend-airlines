import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const FLIGHT_URL = "http://localhost:3000/flight";

function Show() {
	const [flight, setFlight] = useState({});
	let classes;
	let params = useParams();
	const getFlight = async (id) => {
		const url = await fetch(`http://localhost:3000/flight/${id}`);
		const data = await url.json();
		// this needs to be tested and checked
		setFlight(data);
	};
	classes = `grid-${flight.columns}`;

	useEffect(() => {
		getFlight(params.type);
	}, [params.type]);
	return <div className={classes}>Show</div>;
}

export default Show;
