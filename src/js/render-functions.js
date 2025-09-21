import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('#gallery');
const loader = document.querySelector('#page-loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img => `
      <li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}">
          <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <div class="gallery-info">
          <div class="gallery-info-item"><b>Likes</b> ${img.likes}</div>
          <div class="gallery-info-item"><b>Views</b> ${img.views}</div>
          <div class="gallery-info-item"><b>Comments</b> ${img.comments}</div>
          <div class="gallery-info-item"><b>Downloads</b> ${img.downloads}</div>
        </div>
      </li>`
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('active');
  loader.setAttribute('aria-hidden', 'false');
}

export function hideLoader() {
  loader.classList.remove('active');
  loader.setAttribute('aria-hidden', 'true');
}
