import Notiflix from 'notiflix';

export function showLoader() {
  Notiflix.Loading.standard('Loading...');
}
export function hideLoader() {
  Notiflix.Loading.remove();
}

export function showNotification() {
  Notiflix.Notify.failure(
    'Oops! Something went wrong. Please try again later.'
  );
}

export function showWarning() {
  Notiflix.Notify.warning('Oops! Something went wrong, but life goes on');
}

export function showNotificationEmtyValue() {
  Notiflix.Notify.warning(
    'Please enter the name of a movie to initiate a search.'
  );
}

export function noMovie() {
  Notiflix.Notify.warning('No movie was found, try another movie');
}
