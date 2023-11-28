import useSWR from 'swr'

export default function Movies2() {
    const { data, error } = useSWR(`http://www.omdbapi.com/?i=tt0033152?apikey=5d8719bc&s=bagdad`, fetcher)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>
            {data?.Search?.map((movie, i) => (
                <div key={i}>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                    <p>{movie.imdbID}</p>
                    <img src={movie.Poster} width={100} alt={`Poster ${movie.Title}`} />
                </div>
            ))}
        </div>
    )
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}