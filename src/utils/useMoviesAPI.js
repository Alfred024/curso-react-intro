const movieNotFound = [
    {
    Title: "Película no encontrada",
    Year: 0,
    Poster: "https://cdn5.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg"
    }
];

const movieDefault = [
    {
      Title: "Here would be the movie title",
      Year: 0,
      Poster: "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

const url = 'https://movie-database-alternative.p.rapidapi.com/?s=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
};

function useMoviesAPI(movieTyped) {
    let movies;

    React.useEffect(()=>{
        setTimeout(()=>{
            consumeAPI(movieTyped);
        }, 1000);
    },[]);

    async function consumeAPI(movie){
        try{
            const movieConverted = fillSearch(movie);
            const response = await fetch(`${url}${movieConverted}&r=json&page=1` , options);
            const data = await response.json();
            if(movieTyped === ''){
                movies = movieDefault;
            }else{
                if(data.Search){
                    movies = data.Search;
                }
                else{
                    movies = movieNotFound;
                }
            }
        }catch (error) {
            console.error('Error fetching data:', error);
        }
    };

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

    return [movies];
}

export {useMoviesAPI};