function useMoviesStoraged() {
    const movieDefault = [
        {
          Title: "You dont have favs movies, add one!!",
          Year: 0,
          Poster: "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    const moviesStoraged = localStorage.getItem('favsMovies');

    if(moviesStoraged){
        return JSON.parse(moviesStoraged);
    }else{
        const movieDefaultParsed = JSON.stringify(movieDefault);
        localStorage.setItem('favsMovies', movieDefaultParsed);
        return movieDefault;
    }
}

export {useMoviesStoraged};