"use client";

import { useAppContext } from "../../contexts/AppContext";

export default function FavoriteButton({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useAppContext();

  const toggleFavorite = () => {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`mt-1 px-9 py-1 ${isFavorite(movie.id) ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-600 hover:bg-green-700'} text-white rounded cursor-pointer`}
    >
      {isFavorite(movie.id) ? "Quitar de Favoritos" : "Agregar a Favoritos"}
    </button>
  );
}
