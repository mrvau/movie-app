import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";

const Home = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadPopularMovies = async () => {
			try {
				const popularMovies = await getPopularMovies();
				setMovies(popularMovies);
			} catch (err) {
				console.log(err);
				setError("Failed to load movies...");
        setMovies([]);
			} finally {
				setLoading(false);
			}
		};
		loadPopularMovies();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(!searchQuery.trim() || loading) return

    try {
      const searchResults = await searchMovies(searchQuery);
      if(searchResults.length === 0) {
        throw new Error("Can't find the movie");
      }
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setMovies();
    } finally {
      setLoading(false);
    }

		setSearchQuery("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="text-center p-10 flex gap-5 justify-center">
				<input
					type="text"
					placeholder="Search for movies..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-white rounded-md py-2 px-3 w-2xl"
				/>
				<button type="submit" className="bg-green-600 px-5 py-2 rounded-md text-white font-semibold">Search</button>
			</form>

      {error && <div className="text-center font-bold text-2xl text-red-600">{error}</div>}

			{loading ? (
				<div className="text-green-600 text-2xl text-center">Loading...</div>
			) : (
				<div className="flex flex-wrap gap-4 items-center justify-between px-4">
					{movies.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
