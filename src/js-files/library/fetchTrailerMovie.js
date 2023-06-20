import { API_KEY, BASE_URL } from '../utils';

// Fetching the most popular movie using TMDb API
export async function fetchPopularMovieTrailer() {
  try {
    // Fetching the most popular movies using TMDb API sorted by vote count
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=vote_count.desc&api_key=${API_KEY}`
    );
    const data = await response.json();

    const mostPopularMovie = data.results.find(movie => movie.vote_count > 0); // Find the first movie with votes

    // Fetching the video details for the most popular movie
    const videoResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${mostPopularMovie.id}/videos?api_key=${API_KEY}`
    );
    const videoData = await videoResponse.json();

    const trailerVideo = videoData.results.find(
      video => video.type === 'Trailer'
    ); // Find the first trailer video

    if (trailerVideo) {
      const videoKey = trailerVideo.key;

      // Creating the URL for the YouTube trailer
      const youtubeUrl = `https://www.youtube.com/embed/${videoKey}`;

      // Return the YouTube URL
      return youtubeUrl;
    } else {
      throw new Error('No trailer found for the movie.');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
