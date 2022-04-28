import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Seat from "../components/Seat";

const FLIGHT_URL = "http://localhost:3000/flight";

function Show() {
	const [flight, setFlight] = useState({
		name: "flight-m-154",
		seat_row: 30,
		seat_col: 6,
	});
	const [seatsArray, createSeats] = useState([]);

	let params = useParams();
	let classes = `grid-${flight.seat_col}`;
	let colNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

	const getFlight = async (id) => {
		const url = await fetch(`http://localhost:3000/flight/${id}`);
		const data = await url.json();
		// this needs to be tested and checked
		setFlight(data);
	};
	function formSeats() {
		let newSeatsArray = [];
		for (let j = 0; j < flight.seat_row; j++) {
			for (let i = 0; i < flight.seat_col; i++) {
				newSeatsArray.push([String(j + 1), colNames[i]].join(""));
				createSeats(newSeatsArray);
			}
		}
	}
	useEffect(() => {
		getFlight(params.type);
		formSeats();
	}, [params.type]);

	return (
		<div className="content">
			<h3 className="content-header">Please choose your seat</h3>
			<div className={classes}>
				{seatsArray.map((seat, index) => {
					return <Seat key={index} seatinfo={seat} />;
				})}
			</div>
		</div>
	);
}

export default Show;
