import { getAllMovies, getMoviesType, getFilteredMovies } from './fetchMovies';
import { setupGallery } from './setupGallery';
import getElement from './getElement';

const moviesGallery = getElement('.gallery');

const refs = {
  filterForm: document.querySelector('#filter-form'),
  selectGenre: document.querySelector('#genreForm'),
  selectYear: document.querySelector('#yearForm'),
  selectAverage: document.querySelector('#averageForm'),
};

export async function getFilterGenres() {
  const genres = await getMoviesType();
  refs.selectGenre.innerHTML = `<option value=""> Genre </option>`;
  genres.forEach(g => {
    refs.selectGenre.innerHTML += `<option value="${g.id}">${g.name}</option>`;
  });
}

export async function getMoviesYearFilter() {
  const moviesData = await getAllMovies();
  const movies = moviesData.results;
  let years = [];

  movies.forEach(m => {
    if (m.release_date) {
      years.push(m.release_date.split('-')[0]);
    }
  });
}

// filter

const selects = [refs.selectGenre, refs.selectYear, refs.selectAverage];

selects.forEach(select => {
  select.addEventListener('change', async event => {
    event.preventDefault();
    const genre = refs.selectGenre.value;
    const year = refs.selectYear.value;
    const average = refs.selectAverage.value;

    const filterObject = {
      genre: genre,
      year: year,
      vote: average,
    };

    const filtredMovies = await getFilteredMovies(filterObject);
    const movieTypes = await getMoviesType();

    setupGallery(filtredMovies.results, movieTypes, moviesGallery);
  });
});
