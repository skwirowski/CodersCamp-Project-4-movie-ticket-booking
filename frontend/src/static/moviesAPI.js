export const apiKey = '852ea5b7a7faccff191b439466859a53';
export const apiUrl = 'https://api.themoviedb.org/3/movie/';
const endpoint = 'now_playing';

export default `${apiUrl}${endpoint}?api_key=${apiKey}`;
