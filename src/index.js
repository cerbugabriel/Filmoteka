// imports
import { fetchAllMovies } from './js-files/fetchMovies';
// import { handlePagination } from './js-files/pagination';
import getElement from './js-files/getElement';
// fetchAllMovies();

const event = () => {
  const gallery = getElement('.gallery');
  gallery.addEventListener('click', galleryHandler);
};

function galleryHandler(e) {
  const element = e.target.parentNode;
  console.log(element);
}

const init = () => {
  fetchAllMovies();
  // event();
  // handlePagination();
};

window.addEventListener('DOMContentLoaded', init);
