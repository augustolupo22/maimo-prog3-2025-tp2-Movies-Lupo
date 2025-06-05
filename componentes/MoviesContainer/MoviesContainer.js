"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try{
      const API_URL = "https://api.themoviedb.org/3/trending/movie/day?api_key=8d155a452063365b70d7e38e2609b662";
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipes(data.results);;
      setLoading(false);
      } catch (error) {
        console.log("mi error fue:", error);
        setError(true)
      };
    };

    fetchRecipes();
  }, []);

  const verMovies = (id) => {
    window.location.href = `/${id}`;
  };

  return (
    <div className="Movies_grid">
      {!loading && 
      recipes.map((recipe) => (
        <div className="Movies" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <Image src={`https://image.tmdb.org/t/p/w500${recipe.poster_path}`} alt={recipe.name} width={200} height={300} />
          <button onClick={() => verMovies(recipe.id)}>Ver más</button>
        </div>
        ))}
        {loading && "Cargando..."}
    </div>
  );
};

export default RecipeGrid;