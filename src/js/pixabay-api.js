import axios from 'axios';

const API_KEY = 'YOUR_PIXABAY_API_KEY'; // ← встав свій ключ
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
