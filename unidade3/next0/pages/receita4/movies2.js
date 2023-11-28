import useSWR from 'swr';
import React, { useState } from 'react';
import MovieById from './movieById';

export default function Movies2() {
    const [clickMovie, setClickMovie] = useState(null);

    const { data, error } = useSWR(`https://www.omdbapi.com/?apikey=5d8719bc&s=bagdad`, fetcher);

    if (error) return <div>falha na requisição...</div>;
    if (!data) return <div>carregando...</div>;

    if (clickMovie) {
        return <MovieById imdbID={clickMovie.imdbID} />;
    }

    return (
        <div>
            {data?.Search?.map((movie, i) => (
                <div key={i}>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                    <p>{movie.imdbID}</p>
                    <img src={movie.Poster} width={100} alt={`Poster ${movie.Title}`} /><br />
                    <a href=""
                        onClick={(e) => {
                            e.preventDefault();
                            setClickMovie({ imdbID: movie.imdbID });
                        }}
                    >clique aqui para ver detalhes do filme</a>
                </div>
            ))}
        </div>
    );
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}
