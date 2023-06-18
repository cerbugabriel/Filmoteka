// imports
import { fetchAllMovies } from './js-files/fetchMovies';
// import { handlePagination } from './js-files/pagination';
import { handlePagination } from './js-files/utils';
import { fetchPopularMovies } from './js-files/carousel';
fetchPopularMovies();
import getElement from './js-files/getElement';
// fetchAllMovies();

// const event = () => {
//   const gallery = getElement('.gallery');
//   gallery.addEventListener('click', galleryHandler);
// };

// function galleryHandler(e) {
//   const element = e.target.parentNode;
//   console.log(element);
// }

const init = () => {
  fetchAllMovies();
  // window.scrollTo({ top: 0, behavior: 'smooth' });

  // event();
  handlePagination();
};

window.addEventListener('DOMContentLoaded', init);

const body = document.querySelector('body');
const dlBtn = document.querySelector('.dl-btn');
const iconSun = document.querySelector('.fa-sun');
const iconMoon = document.querySelector('.fa-moon');

function store(value) {
  localStorage.setItem('darkmode', value);
}

function load() {
  const darkmode = localStorage.getItem('darkmode');

  if (darkmode === null) {
    store(false);
    iconSun.style.display = 'inline';
    iconMoon.style.display = 'none';
  } else if (darkmode === 'true') {
    body.classList.add('darkmode');
    iconSun.style.display = 'none';
    iconMoon.style.display = 'inline';
  } else if (darkmode === 'false') {
    iconSun.style.display = 'inline';
    iconMoon.style.display = 'none';
  }
}

load();
dlBtn.addEventListener('click', () => {
  body.classList.toggle('darkmode');
  iconSun.classList.add('animated');
  iconMoon.classList.add('animated');

  store(body.classList.contains('darkmode'));

  if (body.classList.contains('darkmode')) {
    iconSun.style.display = 'none';
    iconMoon.style.display = 'inline';
  } else {
    iconSun.style.display = 'inline';
    iconMoon.style.display = 'none';
  }
  setTimeout(() => {
    iconSun.classList.remove('animated');
    iconMoon.classList.remove('anmated');
  }, 500);
});
