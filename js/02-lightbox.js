import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  container: document.querySelector('.gallery'),
};

// ----------------------------створення розмітки----------------------------------
const arrayImgTag = galleryItems.map ( ({preview, original, description}) => {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}"" alt="${description}" />
            </a>
          </li>`;
});

refs.container.insertAdjacentHTML("beforeend", arrayImgTag.join(''));
// ------------------------------END створення розмітки----------------------------------

// ------------------------------підключення лайтбоксу з бібліотеці SimpleLightbox-------
let gallery = new SimpleLightbox('.gallery a', {
  close: false, 
  showCounter: false,
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'text__label',
});

// ------------------------------END підключення лайтбоксу-----------------------------------

