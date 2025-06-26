"use client";

import { useAppContext } from "../../contexts/AppContext";
import MovieCard from "../../componentes/MovieCard/MovieCard";

export default function FavoritesPage() {
  const { favorites } = useAppContext();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Mis Favoritos</h1>
      
      {favorites.length === 0 ? (
        <p>No tenés películas en favoritos.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
