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

function showModal(e) {
  e.preventDefault();
  //   const captionEl = e.target.alt;
  //   я так і не зміг розібратись як зробити підпис

  var $gallery = new SimpleLightbox('.gallery a', {});
}

imgContainer.addEventListener('click', showModal);
