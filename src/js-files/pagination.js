import axios from 'axios';
import { API_KEY, BASE_URL, PER_PAGE, currentPage, totalPages } from './utils';
import { fetchAllMovies } from './fetchMovies.js';

export const handlePagination = async () => {
  try {
    const url = `${BASE_URL}/trending/all/day?language=en-US&api_key=${API_KEY}`;
    const resp = await axios.get(url);
    const data = resp.data;
    const totalResults = data.total_results;
    totalPages = Math.ceil(totalResults / PER_PAGE);
    updatePaginationButtons();

    // Fetch and display the initial page of movies
    fetchAllMovies(currentPage);
  } catch (err) {
    console.log(err);
  }
};

// Function to update pagination buttons
const updatePaginationButtons = () => {
  const prevButton = document.getElementById('prev-btn');
  const nextButton = document.getElementById('next-btn');

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
};

// Event listener for previous button click
document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchAllMovies(currentPage);
    updatePaginationButtons();
  }
});

// Event listener for next button click
document.getElementById('next-btn').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchAllMovies(currentPage);
    updatePaginationButtons();
  }
});

// Initialize pagination
handlePagination();
