export const apiKey = '852ea5b7a7faccff191b439466859a53';
export const apiUrl = 'https://api.themoviedb.org/3/movie/';
const endpoint = 'now_playing';
export const endpointGetGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
export const posterUrl = 'https://image.tmdb.org/t/p/w500';

export default `${apiUrl}${endpoint}?api_key=${apiKey}`;


