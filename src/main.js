// main.js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './render-functions.js';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  try {
    const { hits } = await getImagesByQuery(query);

    if (!Array.isArray(hits) || hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(hits);
  } catch (err) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
