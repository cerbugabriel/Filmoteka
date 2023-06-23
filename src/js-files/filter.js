import { getAllMovies, getMoviesType, getFilteredMovies } from './fetchMovies';

const refs = {
  filterForm: document.querySelector('#filter-form'),
  selectGenre: document.querySelector('#genreForm'),
  selectYear: document.querySelector('#yearForm'),
  selectAverage: document.querySelector('#averageForm'),
};

export async function getFilterGenres() {
  const genres = await getMoviesType();

  console.log(await getFilteredMovies());

  refs.selectGenre.innerHTML = `<option value="0"> Genre </option>`;
  genres.forEach(g => {
    refs.selectGenre.innerHTML += `<option value="${g.id}">${g.name}</option>`;
  });
}

export async function getMoviesYearFilter() {
  const moviesData = await getAllMovies();
  console.log(moviesData);
  const movies = moviesData.results;
  let years = [];

  movies.forEach(m => {
    if (m.release_date) {
      years.push(m.release_date.split('-')[0]);
    }
  });

  console.log(years);
}

// WORK IN PROGRESS
// filter

const genre = document.getElementById('genreForm');
const year = document.getElementById('yearForm');
const average = document.getElementById('averageForm');

genre.addEventListener('change', e => {
  console.log(refs.filterForm.option);
  // console.log(refs.selectAverage.value);
  // console.log(e.target.value);
});
//     const year = document.getElementById('yearForm');
//     const average = document.getElementById('averageForm');

// var tabs = document.querySelectorAll('#filter-form select');
// console.log(tabs);
// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     const genre = document.getElementById('genreForm');
//     const year = document.getElementById('yearForm');
//     const average = document.getElementById('averageForm');
//     console.log(genre.value, year.value, average.value);
//   });
// });
