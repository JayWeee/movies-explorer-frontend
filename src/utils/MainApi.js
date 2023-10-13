import { MAIN_API_BASE_URL, checkServerResponse, imageLinkPrefix } from './utils';

export function register({ name, email, password }) {
  return fetch(`${MAIN_API_BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  })
    .then(checkServerResponse)
}

export function authorize({ email, password }) {
  return fetch(`${MAIN_API_BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(checkServerResponse)
}

export function removeCoockies() {
  return fetch(`${MAIN_API_BASE_URL}/signout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(checkServerResponse)
}

export function getUserInfo() {
  return fetch(`${MAIN_API_BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(checkServerResponse)
}

export function setUserInfo({ name, email }) {
  return fetch(`${MAIN_API_BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then(checkServerResponse)
}

export function getSavedMovies() {
  return fetch(`${MAIN_API_BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkServerResponse)
}

export function createMovie(movie) {  
  return fetch(`${MAIN_API_BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: imageLinkPrefix + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: imageLinkPrefix + movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
  })
    .then(checkServerResponse)
}

export function deleteMovie(movieId) {
  return fetch(`${MAIN_API_BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}