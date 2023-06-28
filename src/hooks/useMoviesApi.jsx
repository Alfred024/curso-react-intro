import React from "react";

const url = 'https://movie-database-alternative.p.rapidapi.com/?s=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
};

const movieNotFound = [
    {
    Title: "Película no encontrada",
    Year: 0,
    Poster: "https://cdn5.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg"
    }
];

function useMoviesApi(movie) {
    const [loading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);
    const movieConverted = fillSearch(movie);
    const urlAdapted = `${url}${movieConverted}&r=json&page=1`;

    React.useEffect(() =>{ 
        const fetchData = async () => {
            try{
                const response = await fetch(urlAdapted, options);
                const data = await response.json();
                if(data.Search){
                    setMovies(data.Search);
                }else{
                    setMovies(movieNotFound);
                }
                setLoading(false);
            }catch (error) {
                setLoading(false);
                console.error('Error fetching data:', error);
            }
        };
      
      fetchData();
     },[setMovies]);

    return [movies];
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