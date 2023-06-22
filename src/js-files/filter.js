import { getAllMovies, getMoviesType, getFilteredMovies } from './fetchMovies';

export async function getFilterGenres() {
  const genres = await getMoviesType();

  console.log(await getFilteredMovies());

  const selectGenre = document.querySelector('#genreForm');
  selectGenre.innerHTML = `<option value="0"> Genre </option>`;
  genres.forEach(g => {
    selectGenre.innerHTML += `<option value="${g.id}">${g.name}</option>`;
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
