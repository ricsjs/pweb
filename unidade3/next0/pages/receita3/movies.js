import { useState } from 'react';

export default function Movies({ initialData }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState(initialData);

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            console.log('Nenhum título digitado');
            return;
        }

        const res = await fetch(`http://www.omdbapi.com/?apikey=5d8719bc&s=${searchTerm}`);
        const newData = await res.json();

        if (newData.Search && newData.Search.length > 0) {
            setData(newData);
        } else {
            console.log('Nenhum resultado encontrado');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Pesquisar</button>

            {data?.Search?.map((movie, i) => (
                <div key={i}>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} width={100} alt={`Poster ${movie.Title}`} />
                </div>
            ))}


        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=5d8719bc&s=bagdad`);
    const initialData = await res.json();

    return {
        props: {
            initialData,
        },
    };
}