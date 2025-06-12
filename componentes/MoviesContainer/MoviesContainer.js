"use client";


import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesContainer.css";

export default function MoviesContainer() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const API_URL =
          "https://api.themoviedb.org/3/trending/movie/day?api_key=8d155a452063365b70d7e38e2609b662";
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("Datos de la API:", data); // <- esto
        console.log("Películas:", data.results); // <- esto
        setMovies(data.results);
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar películas:", err);
        setError(true);
      }
    };

    fetchMovies();
  }, []);

  const verDetalle = (id) => {
    window.location.href = `/${id}`;
  };

  return (
    <div className="movies-container">
      {loading && <p>Cargando películas...</p>}
      {error && <p>Hubo un error al cargar las películas.</p>}
      {!loading && !error && (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={verDetalle} />
          ))}
        </div>
      )}
    </div>
  );
}
