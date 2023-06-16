import getElement from './getElement';

const moviesGallery = getElement('.gallery');

export const setupGallery = (data, movieTypes) => {
  moviesGallery.innerHTML = '';
  const galleryContent = data
    .map(movie => {
      let {
        genre_ids: movieType,
        name,
        poster_path: movieImg,
        release_date: releaseDate,
        id,
      } = movie;
      movieType = displaMovieType(movieType, movieTypes);
      releaseDate = getRealeaseDate(releaseDate);
      movieImg = movieImg
        ? `https://image.tmdb.org/t/p/w500${movieImg}`
        : `../images/no-signal-img.jpg`;
      return `<div class="photo-card" data-id="${id}" >
  <a href="">
    <img src="${movieImg}" class="image" alt="${name}" />
  </a>
  <div class="container-info">
    <b>${name}</b>
    <div class="cont-descr">
      <p class="descr-item">${movieType}</p>
      <p class="descr-item">|</p>
      <p class="descr-item">${releaseDate}</p>
    </div>
  </div>
</div>`;
    })
    .join('');
  moviesGallery.innerHTML = galleryContent;
};

function getRealeaseDate(realeaseDate) {
  const year = realeaseDate ? realeaseDate.split('-')[0] : 'Unknown';
  return year;
}

function displaMovieType(genreArray, movieTypes) {
  let types = '';
  movieTypes.forEach(type => {
    if (genreArray.includes(type.id)) {
      types = types + type.name + ', ';
    }
  });
  types = types ? types.slice(0, -2) : 'Unknown';
  return types;
}
