import { API_KEY, BASE_URL } from './utils';
export const fetchMovieTrailer = async movie => {
  try {
    const url = `${BASE_URL}/movie/${movie.id}/videos?api_key=${API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const videos = data.results.find(video => video.type === 'Trailer');
    console.log(videos);

    if (videos) {
      const videoKey = trailerVideo.key;
      const youtubeUrl = `https://www.youtube.com/embed/${videoKey}`;

      return youtubeUrl;
    } else {
      throw new Error('No trailer found for the movie.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
