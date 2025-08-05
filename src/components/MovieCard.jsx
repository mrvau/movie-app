import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
	const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
	const favorite = isFavorite(movie.id);

	const handleClick = (e) => {
		e.preventDefault();
		if(favorite) removeFromFavorites(movie.id)
		else addToFavorites(movie);
	};
	return (
		<div className="group w-76 h-128 bg-gray-800 p-3 rounded-md">
			<div className="relative mb-1">
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
					className="rounded-sm w-full h-full"
				/>
				<div className="bg-black w-full h-full absolute z-10 top-0 opacity-0 group-hover:opacity-40 transition-opacity"></div>
				<div
					className="absolute top-4 group-hover:top-2 opacity-0 group-hover:opacity-100 right-2 border-gray-400 border-3 h-10 w-10   rounded-full flex justify-center items-center transition-all z-20 cursor-pointer"
					onClick={handleClick}>
					<button className="cursor-pointer">{favorite ? "❤️" : "🤍"}</button>
				</div>
			</div>
			<div>
				<h3 className="text-gray-300 font-semibold">{movie.title}</h3>
				<p className="text-gray-300">{movie.release_date?.split("-")[0]}</p>
			</div>
		</div>
	);
};

export default MovieCard;
