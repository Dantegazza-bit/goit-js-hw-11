import axios from 'axios';

const API_KEY = '52390417-1bf501a7c6f4bb07aa1949c3b'; // ← встав свій ключ
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  },
});

/**
 * Отримати зображення за пошуковим словом.
 * @param {string} query
 * @returns {Promise<any>} data з відповіді бекенда
 */
export async function getImagesByQuery(query) {
  const { data } = await instance.get('', {
    params: { q: query.trim() },
  });
  return data;
}
