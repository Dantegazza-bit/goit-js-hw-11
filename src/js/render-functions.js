import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.getElementById('gallery');
const loaderEl = document.getElementById('loader');

// один екземпляр SimpleLightbox на весь модуль
const lightbox = new SimpleLightbox('#gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

/**
 * Додає картки в галерею та оновлює лайтбокс.
 * @param {Array} images
 */
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${escapeHtml(tags)}" loading="lazy" />
        </a>
        <div class="meta">
          <div><b>${likes}</b>Likes</div>
          <div><b>${views}</b>Views</div>
          <div><b>${comments}</b>Comments</div>
          <div><b>${downloads}</b>Downloads</div>
        </div>
      </li>
    `
    )
    .join('');

  // одна операція вставки в DOM
  galleryEl.insertAdjacentHTML('beforeend', markup);

  // після додавання нових елементів — refresh
  lightbox.refresh();
}

/** Очищення галереї */
export function clearGallery() {
  galleryEl.innerHTML = '';
}

/** Показати лоадер */
export function showLoader() {
  loaderEl.classList.remove('hidden');
  loaderEl.setAttribute('aria-hidden', 'false');
}

/** Приховати лоадер */
export function hideLoader() {
  loaderEl.classList.add('hidden');
  loaderEl.setAttribute('aria-hidden', 'true');
}

/* утиліта для alt/підписів */
function escapeHtml(str = '') {
  return str.replace(
    /[&<>"']/g,
    m =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[
        m
      ])
  );
}
