import React from "react";

const url = 'https://movie-database-alternative.p.rapidapi.com/?s=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
};

function useMoviesApi(movie) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [movies, setMovies] = ([]);
    const movieConverted = fillSearch(movie);
    const urlAdapted = `${url}${movieConverted}&r=json&page=1`;

    React.useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch(urlAdapted, options);
                const jsonData = await response.json();
                setMovies(jsonData);
                setLoading(false);
            }catch (error) {
                setLoading(false);
                setError(true);
                console.error('Error fetching data:', error);
            }
        };
      
      fetchData();
    }, []);

    return [movieFetched];
}

function fillSearch(movie) {
    let movieConverted = '';
    for (let index = 0; index < movie.length; index++) {
        if(movie.charAt(index) === ' '){
            movieConverted += '%20';
        }else{
            movieConverted += movie.charAt(index);
        }
    }
    return movieConverted;
}

export {useMoviesApi};