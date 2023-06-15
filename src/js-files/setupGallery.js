import getElement from './getElement';

const testGallery = getElement('.test-gallery');

export const setupGallery = data => {
  const galleryContent = data
    .map(movie => {
      return `    <li class="test-gallery__card">
              <img
                src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                alt="${movie.title}"
              />
              <h2>Name : ${movie.title}</h2>
              <h4>Release date: ${movie.release_date}</h4>
            </li>`;
    })
    .join('');
  testGallery.innerHTML = galleryContent;
};
