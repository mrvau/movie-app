import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import Navbar from "./components/Navbar";

function App() {
	return (
		<MovieProvider>
			<div className="min-h-lvh bg-gray-950 pb-16">
				<Navbar />
				<main>
					<Routes>
						<Route path="/" element={<Home path="/" />} />
						<Route path="/favorites" element={<Favorites />} />
					</Routes>
				</main>
			</div>
		</MovieProvider>
	);
}

export default App;
