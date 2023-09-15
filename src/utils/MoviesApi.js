import { MOVIES_API_BASE_URL, checkServerResponse } from './utils';

export function getMovies() {
  return fetch(`${MOVIES_API_BASE_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkServerResponse)
}