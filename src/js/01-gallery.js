// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line


const imgContainer = document.querySelector(".gallery");
const imgMarkup = createImgCard(galleryItems);


imgContainer.insertAdjacentHTML("beforeend", imgMarkup);

console.log(createImgCard(galleryItems));

function createImgCard(galleryItems) {
    
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    }).join("");
 
    
};

 new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });

