import Image from "next/image";
import "./MovieCard.css";
import FavoriteButton from "../FavoritesButton/FavoritesButton";

export default function MovieCard({ movie }) {
  const verMovies = (id) => {
    window.location.href = `/${id}`;
  };

  return (
    <div className="p-4 rounded shadow-lg bg-white text-black text-center">
      <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
      <Image
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/placeholder.png"
        }
        alt={movie.title}
        width={200}
        height={300}
        className="mx-auto"
      />
      <button
        onClick={() => verMovies(movie.id)}
        className="mt-2 px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
      >
        Ver más
      </button>
      <FavoriteButton movie={movie} />
    </div>
  );
}
