export const MAIN_API_BASE_URL = 'https://api.films-explorer.nomoreparties.co';
// export const MAIN_API_BASE_URL = 'http://localhost:3000';

export const MOVIES_API_BASE_URL = 'https://api.nomoreparties.co';

export const imageLinkPrefix = 'https://api.nomoreparties.co';

export function checkServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(res);
}

export function getTimeFromMins(mins) {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return hours + 'ч ' + minutes + 'м';
}

export function filter(movies, searchQuerry, checkboxState) {
  return movies.filter(
    (filteredMovies) =>
      (checkboxState ? filteredMovies.duration <= 40 : filteredMovies) &&
      filteredMovies.nameRU
        .toLowerCase()
        .includes(searchQuerry.search.toLowerCase())
  );
}
