"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import "./page.css";

export default function MovieDetail({ params }) {
  const { id: movieId } = use(params);

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  const API_KEY = "8d155a452063365b70d7e38e2609b662";
  const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=es`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar la película");
        return res.json();
      })
      .then(setMovie)
      .catch(() => setError(true));
  }, [API_URL]);

  if (error) return <p className="error">Error al cargar la película.</p>;
  if (!movie) return <p className="loading">Cargando...</p>;

  // Preparar datos para mostrar
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`; // fondo
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // poster
  const releaseDate = movie.release_date; // fecha de estreno
  const rating = movie.vote_average?.toFixed(1); // calificación promedio

  return (
    <div
      className="movie-detail-background"
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      <div className="movie-detail-overlay">
        <div className="movie-detail-card">
          <Image
            src={posterUrl}
            alt={`Póster de ${movie.title}`}
            width={300}
            height={450}
            layout="responsive"
            className="movie-poster"
          />
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p><strong>Fecha de estreno:</strong> {releaseDate}</p>
            <p><strong>Calificación:</strong> {rating} / 10</p>
            <button onClick={() => window.history.back()}>Volver atrás</button>
          </div>
        </div>
      </div>
    </div>
  );
}
