// export let movies = [
//     {
//         id: 0,
//         name: "Avengers - 1",
//         score: 8
//     }, {
//         id: 1,
//         name: "Avengers - 2",
//         score: 9
//     }, {
//         id: 2,
//         name: "Avengers - 3",
//         score: 7
//     }, {
//         id: 3,
//         name: "Avengers - 4",
//         score: 6
//     },
// ];

// export const getMovies = () => movies;

// export const getById = id => {
//     const filteredMovies = movies.filter(movie => movie.id === id);
//     return filteredMovies[0]
// };

// export const deleteMovie = id => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);
//     if (movies.length > cleanedMovies.length) {
//         movies = cleanedMovies;
//         return true;
//     }else {
//         return false;
//     }
// };

// export const addMovie = (name, score) => {
//  const newMovie = {
//      id:Number(`${movies.length + 1}`),
//      name,
//      score
//  }
//  movies.push(newMovie);
//  console.log(movies);
//  return newMovie;
// };

// import fetch from 'node-fetch'

// const API_URL = 'https://yts.am/api/v2/list_movies.json'

// export const getMovies = (limit, rating) => {
//     let REQUEST_URL = API_URL;
//     if (limit > 0) {
//         REQUEST_URL += `?limit=${limit}`;
//     }
//     if (rating > 0) {
//         REQUEST_URL += `&minimum_rating=${rating}`;
//     }
//     return fetch(REQUEST_URL)
//         .then(res => res.json())
//         .then(json => json.data.movies)
// }

// export const getMovies = (limit, rating) => 
//   fetch(`${API_URL}`)
//     .then(res => res.json())
//     .then(json => json.data.movies)


// Axios Code

import axios from 'axios';

const BASE_URL = 'https://yts.am/api/v2/';
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating: rating
        }
    });
    return movies;
};

export const getMovieDetails = async id => {
    const { 
        data: {
            data: { movie }
        }
    } = await axios(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id
        }
    });
    return movie;
};

export const getSuggestions = async id => {
    const {
        data: {
            data: {movies}
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {movie_id: id}
    });
    return movies;
};



