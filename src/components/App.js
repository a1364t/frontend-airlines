import Pages from "../pages/Pages";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
	// this shouldnt need to be touched again ever
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Pages />
			</BrowserRouter>
		</div>
	);
}

export default App;
