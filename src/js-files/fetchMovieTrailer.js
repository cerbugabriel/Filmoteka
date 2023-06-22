import { API_KEY, BASE_URL } from './utils';
export const fetchMovieTrailer = async movie => {
  try {
    const url = `${BASE_URL}/movie/${movie.id}/videos?api_key=${API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const videos = data.results;
    console.log(videos);

    if (videos.length > 0) {
      const trailerVideo = videos.find(video => video.type === 'Trailer');
      if (trailerVideo) {
        return trailerVideo.key; // Return only the YouTube video key
      }
    }
  } catch (err) {
    console.log(err);
  }

  return null;
};
