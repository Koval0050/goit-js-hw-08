// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const imgContainer = document.querySelector('.gallery');

const imgGallery = galleryItems.map(elem => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${elem.original}">
      <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
   </a>
</li>`;
});

imgContainer.insertAdjacentHTML('beforeend', imgGallery.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
const images = imgContainer.querySelectorAll('.gallery__image');
images.forEach(image => {
  image.addEventListener('click', e => {
    e.preventDefault();
    const imageUrl = image.dataset.source;
    lightbox.open(`<img width="1400" height="900" src="${imageUrl}">`);
  });
});
