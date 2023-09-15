// export const MAIN_API_BASE_URL = 'http://api.films-explorer.nomoreparties.co';
export const MAIN_API_BASE_URL = 'http://localhost:3000';

export const MOVIES_API_BASE_URL = 'https://api.nomoreparties.co';

export function checkServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Код ошибки: ${res.status}`);
}