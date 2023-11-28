import React, { useEffect, useState } from "react";

const MovieById = ({ imdbID }) => {
  const [movieById, setMovieById] = useState(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      const url = `http://www.omdbapi.com/?apikey=4e779fd4&i=${imdbID}`;
      const res = await fetch(url);
      const json = await res.json();
      setMovieById(json);
    };

    fetchMovieById();
  }, [imdbID]);

  if (!movieById) return <div>Carregando detalhes do filme...</div>;

  return (
    <div>
      <h2>{movieById.Title}</h2>
      <img src={movieById.Poster} alt={movieById.Title} />
      <p>Ano: {movieById.Year}</p>
    </div>
  );
};

export default MovieById;