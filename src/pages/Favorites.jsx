import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

const Favorite = () => {
	const { favorites } = useMovieContext();

	if (favorites.length !== 0) {
		return (
			<div className="flex flex-wrap gap-4 items-center justify-between px-4">
				{favorites.map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</div>
		);
	}

	return (
		<div className="text-center pt-10">
			<h1 className="font-bold text-2xl text-red-600">Nothing to show</h1>
			<p className="text-white">Start Adding favorite movies</p>
		</div>
	);
};

export default Favorite;
